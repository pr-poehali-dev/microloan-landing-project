import json
import os
from typing import Dict, Any
from datetime import datetime, timedelta
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get loan applications from database with filtering
    Args: event with httpMethod, queryStringParameters (dateFrom, dateTo)
    Returns: HTTP response with applications list and statistics
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    params = event.get('queryStringParameters') or {}
    date_from = params.get('dateFrom')
    date_to = params.get('dateTo')
    
    database_url = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    query = "SELECT * FROM applications WHERE 1=1"
    query_params = []
    
    if date_from:
        query += " AND created_at >= %s"
        query_params.append(date_from)
    
    if date_to:
        query += " AND created_at <= %s"
        query_params.append(date_to)
    
    query += " ORDER BY created_at DESC"
    
    cur.execute(query, query_params)
    applications = cur.fetchall()
    
    now = datetime.now()
    today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    week_start = today_start - timedelta(days=7)
    month_start = today_start - timedelta(days=30)
    
    cur.execute("SELECT COUNT(*) as count FROM applications")
    total_count = cur.fetchone()['count']
    
    cur.execute("SELECT COUNT(*) as count FROM applications WHERE created_at >= %s", (today_start,))
    today_count = cur.fetchone()['count']
    
    cur.execute("SELECT COUNT(*) as count FROM applications WHERE created_at >= %s", (week_start,))
    week_count = cur.fetchone()['count']
    
    cur.execute("SELECT COUNT(*) as count FROM applications WHERE created_at >= %s", (month_start,))
    month_count = cur.fetchone()['count']
    
    cur.close()
    conn.close()
    
    applications_list = []
    for app in applications:
        applications_list.append({
            'id': app['id'],
            'firstName': app['first_name'],
            'lastName': app['last_name'],
            'phone': app['phone'],
            'amount': app['amount'],
            'days': app['days'],
            'formType': app['form_type'],
            'ipAddress': app['ip_address'],
            'createdAt': app['created_at'].isoformat() if app['created_at'] else None
        })
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'applications': applications_list,
            'statistics': {
                'total': total_count,
                'today': today_count,
                'week': week_count,
                'month': month_count
            }
        }, ensure_ascii=False)
    }
