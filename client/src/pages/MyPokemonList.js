import { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { Header } from '../components/Header'
import { UserContext } from '../context/UserContext'
import { PokemonContext } from '../context/PokemonContext'

import { setHeader } from '../helper/SetDefaultHeader'
import { API } from '../url'

export const MyPokemonList = () => {
	const router = useHistory()
	const { state, dispatch } = useContext(UserContext)
  const { pokemonState, dispatchPokemon } = useContext(PokemonContext)
  const [pokemons, setPokemons] = useState([])

  const onClickDetail = (pokemonID) => {
    router.push(`/pokemon/${pokemonID}`)
  }

  useEffect(() => {
  	const filterMyPokemon = async () => {
  		const metadata = {
        method: 'GET',
        headers: setHeader({
          'Content-Type': 'application/json'
        })
      }
  		const myPokemons = await (await fetch(`${API}/pokemons/owner`, metadata)).json()
  		setPokemons(myPokemons.pokemons)
  	}
  	filterMyPokemon()
  }, [])

	return (
		<div>
			<Header />
			<Container className="my-3">
        <h1 className="text-center">My Pokemon List</h1>
        <Row md={ 3 }>
          { pokemons?.map((pokemon) => {
            return (
	            <Col className="my-3" key={ pokemon.id }>
	              <Card style={{ width: '18rem' }}>
	                <Card.Img variant="top" src={ pokemon.picture } />
	                <Card.Body>
	                  <Card.Title>{ pokemon.name }</Card.Title>
	                  <Card.Text>
	                    Type: { pokemon.type }
	                  </Card.Text>
	                  <Button variant="primary" onClick={ () => onClickDetail(pokemon.id) }>Detail</Button>
	                </Card.Body>
	              </Card>
	            </Col>
	          )
           }) }
        </Row>
      </Container>
		</div>
	)
}
