#!/bin/sh

echo 'Running collecstatic...'
python manage.py collectstatic --no-input --settings=config.settings

echo 'Applying migrations...'
python manage.py migrate --settings=config.settings

echo 'Running server...'
gunicorn --env DJANGO_SETTINGS_MODULE=config.settings config.wsgi:application --bind 0.0.0.0:$PORT --timeout 120