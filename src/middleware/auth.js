const jwt = require('jsonwebtoken');
const { findUserById } = require('../models/User');

async function protect(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const [scheme, token] = header.split(' ');

    if (scheme !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Authorization token required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await findUserById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User no longer exists' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}

module.exports = { protect };
