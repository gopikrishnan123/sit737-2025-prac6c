const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js App!');
});

// Health check route for Kubernetes probes
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
