const nodemailer = require('nodemailer');

function getRecipients() {
  return (process.env.MAIL_TO || '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function sendContactMail(contactMessage) {
  const recipients = getRecipients();

  if (!recipients.length) {
    throw new Error('MAIL_TO must include at least one recipient');
  }

  const transporter = createTransporter();
  const subject = `New contact message: ${contactMessage.subject}`;
  const text = [
    'New contact form submission',
    '',
    `Name: ${contactMessage.name}`,
    `Email: ${contactMessage.email}`,
    `Phone: ${contactMessage.phone}`,
    `Subject: ${contactMessage.subject}`,
    '',
    'Message:',
    contactMessage.message,
  ].join('\n');

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(contactMessage.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(contactMessage.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(contactMessage.phone)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(contactMessage.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(contactMessage.message).replace(/\n/g, '<br>')}</p>
  `;

  return transporter.sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: recipients,
    replyTo: contactMessage.email,
    subject,
    text,
    html,
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = { sendContactMail };
