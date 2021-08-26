import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap'
import { LoginModal } from './LoginModal'
import { RegisterModal } from './RegisterModal'

import { UserContext } from '../context/UserContext'


export const Header = () => {
  const router = useHistory()
  const { state, dispatch } = useContext(UserContext)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const handleCloseLoginModal = () => setShowLoginModal(false)
  const handleLoginModal = () => setShowLoginModal(true)

  const handleCloseRegisterModal = () => setShowRegisterModal(false)
  const handleRegisterModal = () => setShowRegisterModal(true)

  const onClickLogout = () => {
    dispatch({
      type: 'logout'
    })
  }

  return (
    <Navbar bg="light" expand="lg">
      <LoginModal show={ showLoginModal } handleClose={ handleCloseLoginModal } />
      <RegisterModal show={ showRegisterModal } handleClose={ handleCloseRegisterModal } />
      <Container>
        <Navbar.Brand href="#home">Pokemon</Navbar.Brand>
        <div className="justify-content-end">
        { state.isLogin ?
          <Navbar.Text>
            <span className="mr-5">{ state.user.firstname } { state.user.lastname }</span>
            <Button variant="success mr-3" onClick={ () => router.push('/mypokemon') }>
              My Pokemon List
            </Button>
            <Button variant="warning mr-3" onClick={ () => router.push('/catch-pokemon') }>
              Catch Pokemon
            </Button>
            <Button variant="primary" onClick={ onClickLogout }>
              Logout
            </Button>
          </Navbar.Text>
          :
          <Navbar.Text>
            <Button variant="primary mr-3" onClick={ handleLoginModal }>
              Login
            </Button>
            <Button variant="success" onClick={ handleRegisterModal }>
              Register
            </Button>
          </Navbar.Text>
        }
        </div>
      </Container>
    </Navbar>
  )
}