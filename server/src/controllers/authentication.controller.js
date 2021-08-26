const ClientError = require('../exceptions/ClientError')
const userService = require('../services/users.service')
const LoginValidator = require('../validation/authentication')
const TokenManager = require('../tokenize/tokenmanager')

const login = async (req, res) => {
  try {
    LoginValidator.loginValidate(req.body)
    const dataLogin = await userService.loginUser(req.body)
    const token = TokenManager.generateToken(dataLogin)

    res.status(200).json({
      status: 'success',
      user: {
        ...dataLogin,
        token
      }
    })
  } catch (error) {
    if (error instanceof ClientError) {
      console.log(error)
      const response = res.status(error.statusCode).send({
        status: 'failed',
        message: error.message
      })
      return response
    }

    const response = res.status(500).send({
      status: 'failed',
      message: error.message
    })
    console.log(error)
    return response
  }
}

const getUserLogin = async (req, res) => {
  try {
    const { email, id } = req.accessToken
    const userData = await userService.checkUser(id, email)
    const token = TokenManager.generateToken(userData)


    res.status(200).json({
      status: 'success',
      user: {
        ...userData,
        token
      }
    })
  } catch (error) {
    if (error instanceof ClientError) {
      console.log(error)
      const response = res.status(error.statusCode).send({
        status: 'failed',
        message: error.message
      })
      return response
    }

    const response = res.status(500).send({
      status: 'failed',
      message: error.message
    })
    console.log(error)
    return response
  }
}

module.exports = { login, getUserLogin }
