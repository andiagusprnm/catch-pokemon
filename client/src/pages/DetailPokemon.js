import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'

import { API } from '../url'


export const DetailPokemon = () => {
	const router = useHistory()
	const { id } = useParams()
	const [pokemon, setPokemon] = useState({})

	const getDetailPokemon = async (pokemonID) => {
		try {
      const data = await (await fetch(`${API}/pokemon/${pokemonID}`)).json()
      setPokemon(data.pokemon)
    } catch (error) {
      console.log(error)
    }
	} 

	useEffect(() => {
		getDetailPokemon(id)
	}, [])
	return (
		<div>
			<Header />
			<Container className="my-3">
				<h1 className="text-center">Pokemon Detail</h1>
        <Row className="justify-content-center">
        	<Col className="my-3" lg>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ pokemon.picture } />
              <Card.Body>
                <Card.Title>{ pokemon.name }</Card.Title>
                <Card.Text>
                  <p>Type: { pokemon.type }</p> 
                  <p>Height: { pokemon.height }</p> 
                  <p>Weight: { pokemon.weight }</p> 
                  <p>Owner: { (pokemon.user?.firstname) ? `${pokemon.user?.firstname} ${pokemon.user?.lastname}` : 'Not Owned' }</p> 
                </Card.Text>
                <Button variant="primary" onClick={ () => router.push('/') }>Back</Button>
              </Card.Body>
            </Card>
        	</Col>
        </Row>
	    </Container>
		</div>
	)
}
