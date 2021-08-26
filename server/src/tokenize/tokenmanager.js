const jwt = require('jsonwebtoken')

const TokenManager = {
  generateToken: (data) => {
    const token = jwt.sign(data, process.env.SECRET_KEY)
    return token
  }
}

module.exports = TokenManager