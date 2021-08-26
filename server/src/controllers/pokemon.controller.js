const ClientError = require('../exceptions/ClientError')
const pokemonService = require('../services/pokemon.service')

const getAllPokemon = async (req, res) => {
	try {
		const pokemons = await pokemonService.getAllPokemon()
		res.status(200).json({
			status: 'success',
			results: pokemons
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

const getDetailPokemon = async (req, res) => {
	try {
		const { id } = req.params
		const pokemon = await pokemonService.getDetailPokemon(id)
		res.status(200).json({
			status: 'success',
			pokemon
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

const getMyPokemon = async (req, res) => {
  try {
    const { id } = req.accessToken
    const pokemons = await pokemonService.getMyPokemon(id)
    res.status(200).json({
      status: 'success',
      pokemons
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

const updatePokemonOwner = async (req, res) => {
  try {
    const { id } = req.accessToken
    const { pokemonID } = req.params
    const pokemons = await pokemonService.updatePokemonOwner(pokemonID, id)
    res.status(200).json({
      status: 'success',
      message: 'success update pokemo owner'
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

module.exports = { getAllPokemon, getDetailPokemon, getMyPokemon, updatePokemonOwner }
