# Newel Website Backend

Node.js backend with Express, PostgreSQL, JWT authentication, contact form storage, and Nodemailer email delivery to multiple recipients.

## Setup

```bash
npm install
copy .env.example .env
npm run dev
```

Update `.env` with your PostgreSQL connection string, JWT secret, SMTP account, and comma-separated `MAIL_TO` recipients.

The server automatically creates the required PostgreSQL tables on startup using `src/db/schema.sql`. You can also run the schema manually:

```bash
psql "postgres://postgres:root@localhost:5432/newel_website" -f src/db/schema.sql
```

If `SEED_ADMIN=true`, the server creates the first admin user on startup when it does not already exist:

```text
Email: admin@newel.com
Password: root
```

## APIs

### Health

`GET /api/health`

### Register

`POST /api/auth/register`

```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "password123"
}
```

### Login

`POST /api/auth/login`

```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

Use the returned token as:

```text
Authorization: Bearer <token>
```

### Current User

`GET /api/auth/me`

Requires JWT.

### Create Contact Message

`POST /api/contact`

Public route. Does not require JWT.

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "subject": "Project enquiry",
  "message": "I would like to discuss a new project."
}
```

This saves the message in PostgreSQL and sends an email to every address in `MAIL_TO`.

### List Contact Messages

`GET /api/contact`

Requires JWT.
