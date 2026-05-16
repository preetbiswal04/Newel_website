require('dotenv').config();

const fs = require('fs/promises');
const path = require('path');
const { Pool } = require('pg');

function createPoolConfig() {
  if (!process.env.DATABASE_URL) {
    return {};
  }

  const databaseUrl = new URL(process.env.DATABASE_URL);

  return {
    host: databaseUrl.hostname,
    port: Number(databaseUrl.port || 5432),
    user: decodeURIComponent(databaseUrl.username),
    password: decodeURIComponent(databaseUrl.password || ''),
    database: databaseUrl.pathname.replace(/^\//, ''),
  };
}

const pool = new Pool(createPoolConfig());

async function connectDB() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required');
  }

  await pool.query('SELECT 1');
  console.log('PostgreSQL connected');
}

async function initializeSchema() {
  const schemaPath = path.join(__dirname, '..', 'db', 'schema.sql');
  const schema = await fs.readFile(schemaPath, 'utf8');

  await pool.query(schema);
  console.log('PostgreSQL schema ready');
}

module.exports = { connectDB, initializeSchema, pool };
