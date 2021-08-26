const { Exchange, Pokemon, User } = require('../../models')

const exchangeService = {
	getListExchange: async function() {
		const results = await Exchange.findAll({
			attributes: { exclude: ['createdAt', 'updatedAt'] },
			include: [
				{
					model: User,
					as: 'user_owner',
					attributes: { exclude: ['createdAt', 'updatedAt', 'password'] }
				},
				{
					model: User,
					as: 'user_trader',
					attributes: { exclude: ['createdAt', 'updatedAt', 'password'] }
				},
				{
					model: Pokemon,
					as: 'pokemon',
					attributes: { exclude: ['createdAt', 'updatedAt', 'password'] }
				}
			]
		})
		return results
	},
	postExchange: async function(data) {
		const result = await Exchange.create(data)
		return result
	}
}

module.exports = exchangeService
