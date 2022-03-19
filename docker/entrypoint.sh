#!/bin/bash
set -eo pipefail

if [[ ! -f ".env" ]]
then
    echo "Error: .env not found."
    cp .env.example .env
fi

npm run seed:all

/usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf

exit 0
