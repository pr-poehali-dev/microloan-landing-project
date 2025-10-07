import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Save loan application to database
    Args: event with httpMethod, body (firstName, lastName, phone, amount, days, formType)
    Returns: HTTP response with success status
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    first_name = body_data.get('firstName', '')
    last_name = body_data.get('lastName', '')
    phone = body_data.get('phone', '')
    amount = body_data.get('amount')
    days = body_data.get('days')
    form_type = body_data.get('formType', 'unknown')
    
    source_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', 'unknown')
    
    if not first_name or not last_name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Missing required fields'})
        }
    
    database_url = os.environ.get('DATABASE_URL')
    
    # Escape single quotes for SQL
    first_name_escaped = first_name.replace("'", "''")
    last_name_escaped = last_name.replace("'", "''")
    phone_escaped = phone.replace("'", "''")
    form_type_escaped = form_type.replace("'", "''")
    source_ip_escaped = source_ip.replace("'", "''")
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    # Use simple query protocol (no parameterized queries)
    full_name = f"{first_name_escaped} {last_name_escaped}".strip()
    query = f"INSERT INTO t_p19837706_microloan_landing_pr.leads (full_name, phone, amount, days, source, ip_address) VALUES ('{full_name}', '{phone_escaped}', {amount if amount else 'NULL'}, {days if days else 'NULL'}, '{form_type_escaped}', '{source_ip_escaped}') RETURNING id"
    
    cur.execute(query)
    result = cur.fetchone()
    lead_id = result[0] if result else None
    
    conn.commit()
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'id': lead_id,
            'message': 'Application submitted successfully'
        })
    }