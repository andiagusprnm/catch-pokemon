const express = require('express')
const router = express.Router()

const { verifyToken } = require('../middleware/auth')

const { login, getUserLogin } = require('../controllers/authentication.controller')
const { getAllUsers, resgisterUser } = require('../controllers/users.controller')
const { getAllPokemon, getDetailPokemon, getMyPokemon, updatePokemonOwner } = require('../controllers/pokemon.controller')
const { addExchange, getListExchange } = require('../controllers/exchange.controller')

router.get('/users', getAllUsers)
router.post('/user', resgisterUser)

router.post('/login', login)

router.get('/pokemons', getAllPokemon)
router.get('/pokemon/:id', getDetailPokemon)
router.get('/pokemons/owner', verifyToken, getMyPokemon)
router.patch('/pokemon/:pokemonID', verifyToken, updatePokemonOwner)

router.get('/exchanges', verifyToken, getListExchange)
router.post('/exchange', verifyToken, addExchange)

router.get('/authorization', verifyToken, getUserLogin)

module.exports = { router }
