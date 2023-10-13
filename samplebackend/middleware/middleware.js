const basicAuth = require('basic-auth')
const users = [
  { username: 'phil.olalere@gmail.com', password: 'password' },
  { username: 'user2', password: 'password2' },
  // Add more users as needed
]

function validateUser(username, password) {
  return users.some(
    (user) => user.username === username && user.password === password,
  )
}

function auth(req, res, next) {
  const user = basicAuth(req)
  if (!user || !validateUser(user.name, user.pass)) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
    return res.status(401).send('Unauthorized')
  }

  return next()
}

module.exports = {
  auth,
}
