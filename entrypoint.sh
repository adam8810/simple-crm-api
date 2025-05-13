#!/bin/sh
# entrypoint.sh

echo "Waiting for MySQL to be ready..."
# Add a loop to wait for MySQL if needed, though depends_on with service_healthy should handle this.
# A more robust wait could involve trying to connect in a loop.

echo "Running database migrations..."
npm run migrate:up

echo "Seeding database..."
npm run seed

echo "Starting server..."
exec npm run start
