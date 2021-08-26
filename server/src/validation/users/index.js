const InvariantError = require('../../exceptions/InvariantError')
const { RegisterPayloadSchema } = require('./schema')

const UserValidator = {
  registerUserValidate: (payload) => {
    const { error } = RegisterPayloadSchema.validate(payload);
    if (error) throw new InvariantError(error.details[0].message)
  }
}

module.exports = UserValidator
