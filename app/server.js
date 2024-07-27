const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    timestamp: new Date(),
  });
});

app.get('/data', (req, res) => {
  const { id } = req.query;

  const dataMap = {
    1: {
      data: 'This is data from /data1 endpoint',
      id: 1,
      timestamp: new Date(),
    },
    2: {
      data: 'This is data from /data2 endpoint',
      id: 2,
      timestamp: new Date(),
    },
  };
  const responseData = dataMap[id];

  if (responseData) {
    res.json(responseData);
  } else {
    res.status(400).json({ error: 'Invalid id parameter' });
  }
});

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

// Start the server and listen on the specified port
var server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.closeServer = () => {
  server.close();
};

module.exports = app;

