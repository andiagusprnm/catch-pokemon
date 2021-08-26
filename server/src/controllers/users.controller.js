const ClientError = require('../exceptions/ClientError')
const userService = require('../services/users.service')
const UserValidator = require('../validation/users')

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      status: 'success',
      users
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

const resgisterUser = async (req, res) => {
  try {
    UserValidator.registerUserValidate(req.body)
    const result = await userService.registerNewUser(req.body)
    res.status(201).json({
      status: 'success',
      user: result
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

module.exports = { getAllUsers, resgisterUser }
