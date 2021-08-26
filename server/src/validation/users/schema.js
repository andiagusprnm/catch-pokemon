const Joi = require('joi')

const RegisterPayloadSchema = Joi.object({
  lastname: Joi.string().optional(),
  firstname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(4)
})

module.exports = { RegisterPayloadSchema }