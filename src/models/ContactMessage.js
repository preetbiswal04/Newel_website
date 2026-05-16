const { pool } = require('../config/db');

async function createContactMessage({ name, email, phone, subject, message }) {
  const result = await pool.query(
    `INSERT INTO contact_messages (name, email, phone, subject, message)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, email.toLowerCase(), phone, subject, message]
  );

  return result.rows[0];
}

async function updateMailStatus(id, mailStatus, mailError = null) {
  const result = await pool.query(
    `UPDATE contact_messages
     SET mail_status = $2,
         mail_error = $3,
         updated_at = NOW()
     WHERE id = $1
     RETURNING *`,
    [id, mailStatus, mailError]
  );

  return result.rows[0];
}

async function listContactMessages() {
  const result = await pool.query(
    `SELECT *
     FROM contact_messages
     ORDER BY created_at DESC`
  );

  return result.rows;
}

module.exports = {
  createContactMessage,
  listContactMessages,
  updateMailStatus,
};
