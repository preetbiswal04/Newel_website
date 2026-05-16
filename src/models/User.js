const bcrypt = require('bcryptjs');
const { pool } = require('../config/db');

async function createUser({ name, email, password }) {
  const passwordHash = await bcrypt.hash(password, 12);
  const result = await pool.query(
    `INSERT INTO users (name, email, password_hash)
     VALUES ($1, $2, $3)
     RETURNING id, name, email, created_at, updated_at`,
    [name, email.toLowerCase(), passwordHash]
  );

  return result.rows[0];
}

async function findUserByEmail(email) {
  const result = await pool.query(
    `SELECT id, name, email, password_hash, created_at, updated_at
     FROM users
     WHERE email = $1`,
    [email.toLowerCase()]
  );

  return result.rows[0] || null;
}

async function findUserById(id) {
  const result = await pool.query(
    `SELECT id, name, email, created_at, updated_at
     FROM users
     WHERE id = $1`,
    [id]
  );

  return result.rows[0] || null;
}

async function comparePassword(candidatePassword, passwordHash) {
  return bcrypt.compare(candidatePassword, passwordHash);
}

module.exports = {
  comparePassword,
  createUser,
  findUserByEmail,
  findUserById,
};
