CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(80) NOT NULL CHECK (char_length(name) >= 2),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(80) NOT NULL CHECK (char_length(name) >= 2),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL CHECK (char_length(phone) >= 7),
  subject VARCHAR(150) NOT NULL CHECK (char_length(subject) >= 2),
  message TEXT NOT NULL CHECK (char_length(message) >= 5),
  mail_status VARCHAR(20) NOT NULL DEFAULT 'pending'
    CHECK (mail_status IN ('pending', 'sent', 'failed')),
  mail_error TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
  ON contact_messages (created_at DESC);
