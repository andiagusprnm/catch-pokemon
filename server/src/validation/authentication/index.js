const InvariantError = require('../../exceptions/InvariantError')
const { LoginSchemaPayload } = require('./schema')

const LoginValidator = {
  loginValidate: (payload) => {
    const { error } = LoginSchemaPayload.validate(payload);
    if (error) throw new InvariantError(error.details[0].message)
  }
}

module.exports = LoginValidator
