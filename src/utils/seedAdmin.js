const { createUser, findUserByEmail } = require('../models/User');

async function seedAdminUser() {
  if (process.env.SEED_ADMIN !== 'true') {
    return;
  }

  const name = process.env.ADMIN_NAME || 'Admin User';
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required when SEED_ADMIN=true');
  }

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    console.log(`Admin user already exists: ${email}`);
    return;
  }

  await createUser({ name, email, password });
  console.log(`Admin user seeded: ${email}`);
}

module.exports = { seedAdminUser };
