const InvariantError = require('../../exceptions/InvariantError')
const { ExchangeSchemaPayload } = require('./schema')

const ExchangeValidator = {
	exchangeValidate: (payload) => {
		const { error } = ExchangeSchemaPayload.validate(payload);
    if (error) throw new InvariantError(error.details[0].message)
	}
}

module.exports = ExchangeValidator
