const express = require('express');
const basicAuth = require('basic-auth');
const app = express();
const port = 4000;

// Define a list of users with their username and password
const users = [
  { username: 'phil.olalere@gmail.com', password: 'password' },
  { username: 'user2', password: 'password2' },
  // Add more users as needed
];

// Create a basic authentication middleware
const auth = (req, res, next) => {
  const user = basicAuth(req);
  console.log(user)
  if (!user || !validateUser(user.name, user.pass)) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.status(401).send('Unauthorized');
  }

  return next();
};

function validateUser(username, password) {
  return users.some((user) => user.username === username && user.password === password);
}

// Protect a route using the auth middleware
app.get('/secure', auth, (req, res) => {
  res.send('Welcome to the secure area!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
