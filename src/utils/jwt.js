const jwt = require('jsonwebtoken');

function signToken(user) {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is required');
  }

  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );
}

module.exports = { signToken };
