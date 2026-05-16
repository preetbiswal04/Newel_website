// const app = require('./app');
// const { connectDB, initializeSchema } = require('./config/db');
// const { seedAdminUser } = require('./utils/seedAdmin');

// const PORT = process.env.PORT || 5000;

// async function startServer() {
//   await connectDB();
//   await initializeSchema();
//   await seedAdminUser();

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// }

// startServer().catch((error) => {
//   console.error('Failed to start server:', error.message);
//   process.exit(1);
// });


//  15 may


const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
