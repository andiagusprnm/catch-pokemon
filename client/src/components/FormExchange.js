import { useContext, useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { API } from '../url'
import { setHeader } from '../helper/SetDefaultHeader'


export const FormExchange = ({ show, handleClose }) => {
  const [pokemons, setPokemons] = useState([])

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
		<Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Exchange Pokemon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      	<Form>
          <Form.Group className="mb-3">
          	<label htmlFor="">My Pokemon</label>
	          <select name="" id="" className="form-control">
	          	{
	          		pokemons?.map((pokemon) => (
	          			<option value={ pokemon.id }>{ pokemon.name }</option>
	          		))
	          	}
	          </select>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Want Pokemon</Form.Label>
            <Form.Control type="text" name="wanted" placeholder="Want Pokemon ..." />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
	)
}

