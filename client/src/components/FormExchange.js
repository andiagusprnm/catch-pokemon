import { useContext, useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { API } from '../url'
import { setHeader } from '../helper/SetDefaultHeader'


export const FormExchange = ({ show, handleClose, getExchangeList }) => {
  const [pokemons, setPokemons] = useState([])
  const [formExchange, setFormExchange] = useState({ pokemon_id: '', wanted: '' })

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

  const onChangeInput = (e) => {
    setFormExchange({
      ...formExchange,
      [e.target.name]: e.target.value
    })
    console.log(formExchange)
  }

  const onSubmitExchange = async (e) => {
    e.preventDefault()
    try {
      const metadata = {
        method: 'POST',
        body: JSON.stringify(formExchange),
        headers: setHeader({
          'Content-Type': 'application/json'
        })
      }
      const result = await (await fetch(`${API}/exchange`, metadata)).json()
      if (result.status === 'failed') {
        alert(result.message)
      }
      getExchangeList()
      handleClose(false)
    } catch (error) {
      console.log(error)
    }
  }

	return (
		<Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Exchange Pokemon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      	<Form onSubmit={ onSubmitExchange }>
          <Form.Group className="mb-3">
          	<label htmlFor="">My Pokemon</label>
	          <select name="pokemon_id" id="pokemon_id" onChange={ onChangeInput } className="form-control">
	          	{
	          		pokemons?.map((pokemon) => (
	          			<option value={ pokemon.id }>{ pokemon.name }</option>
	          		))
	          	}
	          </select>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Want Pokemon</Form.Label>
            <Form.Control type="text" name="wanted" value={ formExchange.wanted } onChange={ onChangeInput } placeholder="Want Pokemon ..." />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
	)
}

