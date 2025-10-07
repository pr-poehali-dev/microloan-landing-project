import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Save lead form submission to database
    Args: event with httpMethod, body (full_name, phone, source)
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
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    full_name = body_data.get('full_name', '').strip()
    phone = body_data.get('phone', '').strip()
    source = body_data.get('source', 'unknown')
    
    source_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', 'unknown')
    
    if not full_name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Missing required fields: full_name and phone'})
        }
    
    database_url = os.environ.get('DATABASE_URL')
    
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Database not configured'})
        }
    
    # Escape single quotes for SQL
    full_name_escaped = full_name.replace("'", "''")
    phone_escaped = phone.replace("'", "''")
    source_escaped = source.replace("'", "''")
    source_ip_escaped = source_ip.replace("'", "''")
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    # Use simple query protocol (no parameterized queries)
    query = f"INSERT INTO t_p19837706_microloan_landing_pr.leads (full_name, phone, source, ip_address) VALUES ('{full_name_escaped}', '{phone_escaped}', '{source_escaped}', '{source_ip_escaped}') RETURNING id"
    
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
            'message': 'Lead submitted successfully'
        })
    }