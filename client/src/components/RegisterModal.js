import { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { API } from '../url'

export const RegisterModal = ({ show, handleClose }) => {
  const [error, setError] = useState('')
  const [formRegister, setFormRegister] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  })

  const onSubmitRegister = async (e) => {
    e.preventDefault()
    try {
      const metadata = {
        method: 'POST',
        body: JSON.stringify(formRegister),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const data = await (await fetch(`${API}/user`, metadata)).json()

      if (data.status === 'failed') {
        setError(data.message)
        return
      }

      setFormRegister({
        email: '',
        firstname: '',
        lastname: '',
        password: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeForm = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value
    })
  }

	return (
		<Modal show={show} onHide={ handleClose }>
      <Modal.Header closeButton>
        <Modal.Title>Register User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      	<Form onSubmit={ onSubmitRegister }>
          <Form.Text className="text-muted">
            { error && <p className="text-center">{ error }</p> }
          </Form.Text>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstname" id="firstname" value={ formRegister.firstname } onChange={ onChangeForm } placeholder="Enter Firstname" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastname" id="lastname" value={ formRegister.lastname } onChange={ onChangeForm } placeholder="Enter Lastname" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" id="email" value={ formRegister.email } onChange={ onChangeForm } placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={ formRegister.password } onChange={ onChangeForm } placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
	)
}