const { Pokemon, User } = require('../../models')
const NotFoundError = require('../exceptions/NotFoundError')

const pokemonService = {
	getAllPokemon: async function () {
		const pokemons = Pokemon.findAll({
			attributes: { exclude: ['createdAt', 'updatedAt', 'owner_user_id'] },
			include: {
				model: User,
				as: 'user',
				attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
			}
		})
		return pokemons
	},
	getDetailPokemon: async function(pokemonID) {
		const pokemon = await Pokemon.findOne({
			where: { id: pokemonID },
			attributes: { exclude: ['createdAt', 'updatedAt', 'owner_user_id'] },
			include: {
				model: User,
				as: 'user',
				attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
			}
		})
		
		if (!pokemon) throw new NotFoundError('Pokemon not found')
		return pokemon
	},
	getMyPokemon: async function(ownerID) {
		const pokemon = await Pokemon.findAll({
			where: { owner_user_id: ownerID },
			attributes: { exclude: ['createdAt', 'updatedAt', 'owner_user_id'] },
			include: {
				model: User,
				as: 'user',
				attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
			}
		})
		return pokemon
	},
	updatePokemonOwner: async function(pokemonID, userID) {
		const update = await Pokemon.update(
			{ owner_user_id: userID },
			{where: { id: pokemonID }}
		)
	}
}

module.exports = pokemonService
