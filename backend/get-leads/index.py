'''
Business: Get leads statistics and list for admin panel
Args: event with httpMethod (GET), queryStringParameters (limit, offset, date_from, date_to)
      context with request_id
Returns: HTTP response with leads list and statistics
'''

import json
import os
from typing import Dict, Any, List, Optional
import psycopg2
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    params = event.get('queryStringParameters') or {}
    limit: int = int(params.get('limit', 100))
    offset: int = int(params.get('offset', 0))
    date_from: Optional[str] = params.get('date_from')
    date_to: Optional[str] = params.get('date_to')
    
    dsn: str = os.environ.get('DATABASE_URL', '')
    
    conn = psycopg2.connect(dsn)
    cursor = conn.cursor()
    
    where_clause = ''
    if date_from and date_to:
        where_clause = f"WHERE created_at >= '{date_from}' AND created_at <= '{date_to}'"
    elif date_from:
        where_clause = f"WHERE created_at >= '{date_from}'"
    elif date_to:
        where_clause = f"WHERE created_at <= '{date_to}'"
    
    stats_query = f'''
        SELECT 
            COUNT(*) as total,
            COUNT(CASE WHEN created_at::date = CURRENT_DATE THEN 1 END) as today,
            COUNT(CASE WHEN created_at >= CURRENT_DATE - INTERVAL '7 days' THEN 1 END) as week,
            COUNT(CASE WHEN created_at >= CURRENT_DATE - INTERVAL '30 days' THEN 1 END) as month
        FROM t_p19837706_microloan_landing_pr.leads
        {where_clause}
    '''
    
    cursor.execute(stats_query)
    stats_row = cursor.fetchone()
    
    stats = {
        'total': stats_row[0] if stats_row else 0,
        'today': stats_row[1] if stats_row else 0,
        'week': stats_row[2] if stats_row else 0,
        'month': stats_row[3] if stats_row else 0
    }
    
    leads_query = f'''
        SELECT id, first_name, last_name, phone, amount, days, source, created_at, ip_address
        FROM t_p19837706_microloan_landing_pr.leads
        {where_clause}
        ORDER BY created_at DESC
        LIMIT {limit} OFFSET {offset}
    '''
    
    cursor.execute(leads_query)
    rows = cursor.fetchall()
    
    leads: List[Dict[str, Any]] = []
    for row in rows:
        full_name = f"{row[1]} {row[2]}".strip() if row[1] and row[2] else (row[1] or row[2] or 'Не указано')
        leads.append({
            'id': row[0],
            'full_name': full_name,
            'phone': row[3],
            'amount': row[4],
            'days': row[5],
            'source': row[6],
            'created_at': row[7].isoformat() if row[7] else None,
            'ip_address': row[8]
        })
    
    cursor.close()
    conn.close()
    
    result = {
        'stats': stats,
        'leads': leads,
        'limit': limit,
        'offset': offset
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(result, ensure_ascii=False),
        'isBase64Encoded': False
    }