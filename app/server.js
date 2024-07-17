// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port
const port = 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    timestamp: new Date(),
  });
});

// /data1 endpoint
app.get('/data1', (req, res) => {
  res.json({
    data: 'This is data from /data1 endpoint',
    id: 1,
    timestamp: new Date(),
  });
});

// /data2 endpoint
app.get('/data2', (req, res) => {
  res.json({
    data: 'This is data from /data2 endpoint',
    id: 2,
    timestamp: new Date(),
  });
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
