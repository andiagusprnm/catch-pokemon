const Joi = require('joi')

const ExchangeSchemaPayload = Joi.object({
  pokemon_id: Joi.string().required(),
  wanted: Joi.string().required()
})

module.exports = { ExchangeSchemaPayload }