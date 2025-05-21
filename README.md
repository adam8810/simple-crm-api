# Take Home Assessment

See [ASSIGNMENT)(https://github.com/adam8810/simple-crm-api/blob/main/ASSIGNMENT.md) for more details.

## Setup

I setup a docker compose environment to make running the application easy. Simply
run the following command:

     docker compose up --build -d

## Endpoints

| Method | Path                            | Description                  |
| ------ | ------------------------------- | ---------------------------- |
| POST   | /api/v1/companies               | Create a new company         |
| GET    | /api/v1/companies               | Get all companies            |
| GET    | /api/v1/companies/:id           | Get a company by ID          |
| PUT    | /api/v1/companies/:id           | Update a company by ID       |
| DELETE | /api/v1/companies/:id           | Delete a company by ID       |
| POST   | /api/v1/contacts                | Create a new contact         |
| GET    | /api/v1/contacts                | Get all contacts             |
| GET    | /api/v1/contacts/:id            | Get a contact by ID          |
| PUT    | /api/v1/contacts/:id            | Update a contact by ID       |
| DELETE | /api/v1/contacts/:id            | Delete a contact by ID       |
| GET    | /api/v1/contacts/:id/activities | Get activities for a contact |
| POST   | /api/v1/activities              | Create a new activity        |
| GET    | /api/v1/activities              | Get all activities           |
