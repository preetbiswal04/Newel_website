// require('dotenv').config();

// const cors = require('cors');
// const express = require('express');
// const morgan = require('morgan');

// const authRoutes = require('./routes/authRoutes');
// const contactRoutes = require('./routes/contactRoutes');
// const errorHandler = require('./middleware/errorHandler');

// const app = express();

// app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: true }));
// app.use(express.json());
// app.use(morgan('dev'));

// app.get('/api/health', (req, res) => {
//   res.json({ status: 'ok' });
// });

// app.use('/api/auth', authRoutes);
// app.use('/api/contact', contactRoutes);

// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// app.use(errorHandler);

// module.exports = app;


//  15 may


require('dotenv').config();

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/contact', contactRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(errorHandler);

module.exports = app;
