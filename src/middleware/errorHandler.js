function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  if (error.code === '23505') {
    return res.status(409).json({ message: 'Email already exists' });
  }

  console.error(error);
  res.status(error.statusCode || 500).json({
    message: error.message || 'Internal server error',
  });
}

module.exports = errorHandler;
