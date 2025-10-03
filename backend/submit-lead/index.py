import json
import os
import psycopg2
import re
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Submit loan application lead with contact details
    Args: event with httpMethod, body containing full_name and phone
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
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    full_name: str = body_data.get('full_name', '').strip()
    first_name: str = body_data.get('firstName', body_data.get('first_name', '')).strip()
    last_name: str = body_data.get('lastName', body_data.get('last_name', '')).strip()
    phone: str = body_data.get('phone', '').strip()
    amount = body_data.get('amount')
    days = body_data.get('days')
    source: str = body_data.get('source', 'unknown')
    
    if not full_name and (first_name or last_name):
        full_name = f"{first_name} {last_name}".strip()
    
    if not full_name or len(full_name) < 3:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'ФИО должно содержать минимум 3 символа'})
        }
    
    phone_digits = re.sub(r'\D', '', phone)
    if len(phone_digits) < 10:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Введите корректный номер телефона'})
        }
    
    user_agent: str = event.get('headers', {}).get('user-agent', '')
    source_ip: str = event.get('requestContext', {}).get('identity', {}).get('sourceIp', '')
    
    database_url = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    cur.execute(
        "INSERT INTO t_p19837706_microloan_landing_pr.leads (first_name, last_name, phone, amount, days, source, ip_address) VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id",
        (first_name if first_name else full_name.split()[0] if full_name else '', 
         last_name if last_name else ' '.join(full_name.split()[1:]) if len(full_name.split()) > 1 else '',
         phone, amount, days, source, source_ip)
    )
    
    lead_id = cur.fetchone()[0]
    
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
            'message': 'Заявка принята! Мы свяжемся с вами в ближайшее время',
            'lead_id': lead_id
        })
    }