import json
import os
import re
import psycopg2


def handler(event: dict, context) -> dict:
    """Принимает заявки с формы обратной связи (ФИО, телефон, вопрос) и сохраняет их в базу данных.
    Args: event - dict с httpMethod, body; context - объект с request_id.
    Returns: HTTP response dict с результатом отправки.
    """
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Method not allowed'})
        }

    body_data = json.loads(event.get('body', '{}'))
    full_name = (body_data.get('full_name') or '').strip()
    phone = (body_data.get('phone') or '').strip()
    message = (body_data.get('message') or '').strip()

    if not full_name or not phone or not message:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Заполните все поля'})
        }

    if len(full_name) > 255 or len(phone) > 50:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Слишком длинные данные'})
        }

    if not re.match(r'^[\d\s\+\-\(\)]{5,50}$', phone):
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Некорректный номер телефона'})
        }

    safe_name = full_name.replace("'", "''")
    safe_phone = phone.replace("'", "''")
    safe_message = message.replace("'", "''")

    dsn = os.environ['DATABASE_URL']
    conn = psycopg2.connect(dsn)
    try:
        cur = conn.cursor()
        cur.execute(
            f"INSERT INTO contact_requests (full_name, phone, message) "
            f"VALUES ('{safe_name}', '{safe_phone}', '{safe_message}') RETURNING id"
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
    finally:
        conn.close()

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True, 'id': new_id})
    }
