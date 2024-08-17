const express = require('express');
const app = express();
const port = 4000;
const mongoDB = require("./db");
const cors = require('cors');

// Initialize MongoDB connection
mongoDB();

// Middleware for CORS
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());

// Set up routes
app.use('/api', require("./Routes/CreateUser"));

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 