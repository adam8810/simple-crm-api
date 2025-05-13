# Build a Simple Backend API for Managing Contacts, Companies, and Activities

## Core Requirements:

- NodeJS with TypeScript
- MySQL as the database
- REST API endpoints for:
  - CRUD for Contacts
  - CRUD for Companies
  - Create and list Activities linked to Contacts and Companies
  - Activities belong to Contacts
  - Contacts belong to Companies
- Basic error handling and input validation

## Notes & Assumptions:

- This will be load balanced so I won't worry about SSL or HTTPS because that'll
  be the job of the load balancer and I can keep my express API simple.

## Thought process:

- I need 4 tables for companies, contacts, activites and activity types.
- I'll need 3 main REST endpoints for companies, contacts and activities

## Columns:

companies:

- ID: primary key
- name: string
- dateCreated: DATETIME
- active: BOOLEAN

contacts:

- ID: primary key
- first_name: string
- last_name: string
- dateCreated: DATETIME
- active: BOOLEAN

activities:

- ID: primary key
- contact_id: fk to contacts
- type: fk to activity_types
- notes: TEXT
- dateCreated: DATETIME

activity_types:

- ID: primary key
- name: string
- active: BOOLEAN
- dateCreated: DATETIME
