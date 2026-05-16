const {
  comparePassword,
  createUser,
  findUserByEmail,
} = require('../models/User');
const { signToken } = require('../utils/jwt');

function authResponse(user) {
  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token: signToken(user),
  };
}

async function register(req, res, next) {
  try {
    const user = await createUser(req.body);
    res.status(201).json(authResponse(user));
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user || !(await comparePassword(password, user.password_hash))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json(authResponse(user));
  } catch (error) {
    next(error);
  }
}

async function me(req, res) {
  res.json({
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    },
  });
}

module.exports = { register, login, me };
