const { body } = require('express-validator');
const express = require('express');

const { createContactMessage } = require('../controllers/contactController');
const validate = require('../middleware/validate');

const router = express.Router();

router.post(
  '/',
  [
    body('name').trim().isLength({ min: 2, max: 80 }).withMessage('Name must be 2 to 80 characters'),
    body('email').isEmail().withMessage('A valid email is required').normalizeEmail(),
    body('phone').trim().isLength({ min: 7, max: 20 }).withMessage('Phone must be 7 to 20 characters'),
    body('subject').trim().isLength({ min: 2, max: 150 }).withMessage('Subject must be 2 to 150 characters'),
    body('message').trim().isLength({ min: 5, max: 2000 }).withMessage('Message must be 5 to 2000 characters'),
  ],
  validate,
  createContactMessage
);

module.exports = router;