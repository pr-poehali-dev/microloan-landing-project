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
    phone: str = body_data.get('phone', '').strip()
    
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
        "INSERT INTO t_p19837706_microloan_landing_pr.leads (full_name, phone, user_agent, ip_address) VALUES (%s, %s, %s, %s) RETURNING id",
        (full_name, phone, user_agent, source_ip)
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
