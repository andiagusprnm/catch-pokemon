import { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { API } from '../url'

import { UserContext } from '../context/UserContext'

export const LoginModal = ({ show, handleClose }) => {
  const { dispatch } = useContext(UserContext)
  const [formLogin, setFormLogin] = useState({ email: '', password: ''})
  const [error, setError] = useState('')

  const onSubmitLogin = async (e) => {
    e.preventDefault()
    try {
      const metadata = {
        method: 'POST',
        body: JSON.stringify(formLogin),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const data = await (await fetch(`${API}/login`, metadata)).json()
      if (data.status === 'failed') {
        setError(data.message)
        return
      }
      localStorage.setItem('token', data.user.token)
      const { user: { token, ...rest } } = data
      dispatch({
        type: 'login_success',
        payload: rest
      })
      setFormLogin({ email: '', password: ''})
      handleClose(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeForm = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })
  }

	return (
		<Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      	<Form onSubmit={ onSubmitLogin }>
          <Form.Text className="text-muted">
            { error && <p className="text-center">{ error }</p> }
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={ formLogin.email } onChange={ onChangeForm } placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={ formLogin.password } onChange={ onChangeForm } placeholder="Password" />
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