import { useEffect, useState, useContext } from 'react'
import { Header } from '../components/Header'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

import { UserContext } from '../context/UserContext'
import { PokemonContext } from '../context/PokemonContext'

import { setHeader } from '../helper/SetDefaultHeader'
import { API } from '../url'

export const CatchPokemon = () => {
	const { state, dispatch } = useContext(UserContext)
  const { pokemonState, dispatchPokemon } = useContext(PokemonContext)
  const [filterPokemonOwner, setFilterPokemonOwner] = useState([])
  const [price, setPrice] = useState() 
	const [chance, setChance] = useState(4)

	const onClickCatchPokemon = () => {
		const pokemonList = pokemonState.pokemon.filter((pokemon) => pokemon.user === null)
		const getPriceChance = 75
		const numberChance = Math.floor(Math.random() * 101)
		if (numberChance > getPriceChance) {
			const getPokemons = Math.floor(Math.random() * filterPokemonOwner.length + 1)
			setPrice(pokemonList[getPokemons])
			dispatchPokemonListOwner(pokemonList[getPokemons].id, pokemonList[getPokemons].name)
			alert('Contratulations')
		} else {
			if (chance > 0) {
				setChance(chance - 1)
			}
		}
	}

	const dispatchPokemonListOwner = (pokemonID, namePokemon) => {
		const indexPokemon = pokemonState.pokemon.findIndex((p) => p.name === namePokemon)
		console.log(indexPokemon)
		pokemonState.pokemon[indexPokemon] = {
			...pokemonState.pokemon[indexPokemon],
			user: state.user
		}
		dispatchPokemon({
			type: 'price',
			payload: pokemonState.pokemon
		})
		updatePokemonOwner(pokemonID)
	}

	const updatePokemonOwner = async (pokemonID) => {
		try {
        const metadata = {
          method: 'PATCH',
          headers: setHeader({
            'Content-Type': 'application/json'
          })
        }
        const result = await (await fetch(`${API}/pokemon/${pokemonID}`, metadata)).json()
        console.log(result)
      } catch (error) {
        console.log(error)
      }
	}

	return (
		<div>
			<Header />
			<Container>
				<h1 className="text-center">Catch Pokemon</h1>
				<Row className="justify-content-center my-3">
					<Col md="auto">
						{ (chance === 0) ?
							<Button variant="primary" disabled>
								Your chance empty
							</Button>
							:
							<Button variant="primary" onClick={ onClickCatchPokemon }>
								Catch Pokemon
							</Button>
						}
						<p>your chance: { chance }</p>
					</Col>
					</Row>
					<Row>
					<Col>
						{ price && (
							<div>
								<h1>Contratulations</h1>
								<Card style={{ width: '18rem' }}>
		              <Card.Img variant="top" src={ price?.picture } />
		              <Card.Body>
		                <Card.Title>{ price?.name }</Card.Title>
		                <Card.Text> Type: { price?.type }</Card.Text>
		                <Card.Text>Height: { price?.height }</Card.Text>
		                <Card.Text>Weight: { price?.weight }</Card.Text>
		              </Card.Body>
		            </Card>
	            </div>
						) }
					</Col>
				</Row>
			</Container>
		</div>
	)
}