import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get click statistics for MFOs and blog post views, increment blog views
    Args: event with httpMethod (GET/POST), queryStringParameters (type, post_slug)
    Returns: HTTP response with statistics or view increment confirmation
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method not in ['GET', 'POST']:
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    database_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    params = event.get('queryStringParameters', {}) or {}
    stat_type = params.get('type', 'mfo')
    
    # POST - increment blog post view
    if method == 'POST':
        post_slug = params.get('post_slug', '')
        if not post_slug:
            cur.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'post_slug is required'})
            }
        
        cur.execute(
            "INSERT INTO blog_post_views (post_slug, view_count, last_viewed_at) "
            "VALUES (%s, 1, CURRENT_TIMESTAMP) "
            "ON CONFLICT (post_slug) DO UPDATE SET "
            "view_count = blog_post_views.view_count + 1, "
            "last_viewed_at = CURRENT_TIMESTAMP "
            "RETURNING view_count",
            (post_slug,)
        )
        new_count = cur.fetchone()[0]
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
            'body': json.dumps({'success': True, 'view_count': new_count})
        }
    
    # GET - retrieve statistics
    if stat_type == 'blog':
        post_slug = params.get('post_slug')
        if post_slug:
            cur.execute(
                "SELECT view_count FROM blog_post_views WHERE post_slug = %s",
                (post_slug,)
            )
            result = cur.fetchone()
            view_count = result[0] if result else 0
            cur.close()
            conn.close()
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'post_slug': post_slug, 'view_count': view_count})
            }
        else:
            cur.execute("SELECT post_slug, view_count FROM blog_post_views ORDER BY view_count DESC")
            results = cur.fetchall()
            views = [{'post_slug': row[0], 'view_count': row[1]} for row in results]
            cur.close()
            conn.close()
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'views': views})
            }
    
    # Default: MFO stats
    cur.execute("""
        SELECT 
            mfo_name, 
            COUNT(*) as clicks,
            MAX(clicked_at) as last_click
        FROM mfo_clicks
        GROUP BY mfo_name
        ORDER BY clicks DESC
    """)
    
    results = cur.fetchall()
    stats = []
    for row in results:
        stats.append({
            'mfo_name': row[0],
            'clicks': row[1],
            'last_click': row[2].isoformat() if row[2] else None
        })
    
    cur.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'stats': stats, 'total': len(stats)})
    }