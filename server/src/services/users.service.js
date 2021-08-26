const { User } = require('../../models')
const bcrypt = require('bcrypt')
const InvariantError = require('../exceptions/InvariantError')
const NotFoundError = require('../exceptions/NotFoundError')
const AuthenticationError = require('../exceptions/AuthenticationError')

const userService = {
  getAllUsers: async function () {
    const results = await User.findAll({
      attributes: ['firstname', 'lastname', 'email', 'image']
    })
    return results
  },
  registerNewUser: async function(data) {
    const { password, email } = data
    await this.checkEmail(email)
    const hashedPassword = await bcrypt.hash(password, 10)
    const newData = {
      ...data,
      password: hashedPassword,
      image: 'default.jpg'
    }
    const registered = await User.create(newData)
    return ({
      id: registered.id,
      email: registered.email
    })
  },
  checkEmail: async function(email) {
    const result = await User.findOne({
      attributes: ['id', 'email', 'firstname', 'lastname'],
      where: { email: email }
    })
    if (result) throw new InvariantError('email already exist')
  },
  loginUser: async function(data) {
    const { email, password } = data
    const result = await User.findOne({
      attributes: ['id', 'email', 'firstname', 'lastname', 'image', 'password'],
      where: { email: email }
    })
    if(!result) throw new AuthenticationError('email or password invalid')
    
    const match = await bcrypt.compare(password, result.password) 
    if (!match) {
      throw new AuthenticationError('email or password invalid')
    }
    return ({
      id: result.id,
      email: result.email,
      firstname: result.firstname,
      lastname: result.lastname,
      image: result.image,
    })
  },
  checkUser: async function(id, email) {
    const result = await User.findOne({
      attributes: ['id', 'email', 'firstname', 'lastname', 'image', 'password'],
      where: { email, id }
    })
    if(!result) throw new NotFoundError('User Not Found')
    
    return ({
      id: result.id,
      email: result.email,
      firstname: result.firstname,
      lastname: result.lastname,
      image: result.image,
    })
  }
}

module.exports = userService
