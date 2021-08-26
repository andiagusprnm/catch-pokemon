import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Header } from '../components/Header'

import { API } from '../url'

export const Home = () => {
  const router = useHistory()
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
    try {
      const data = await (await fetch(`${API}/pokemons`)).json()
      setPokemons(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const onClickDetail = (pokemonID) => {
    router.push(`/pokemon/${pokemonID}`)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div>
      <Header />
      <Container className="my-3">
        <Row md={ 3 }>
          { pokemons?.map((pokemon) => (
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
           )) }
        </Row>
      </Container>
    </div>
  )
}
