const express = require('express');
const { auth } = require('./middleware/middleware');

const app = express();
const port = 4000;

// Protect a route using the auth middleware
app.get('/secure', auth, (req, res) => {
  res.send('Welcome to the secure areawww!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});