import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom';



const Header = () => {
  const isLogin = Cookies.get('token')
  const navigate = useNavigate()

  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand as={Link} to ="/">SakhaPremium.id</Navbar.Brand>
    <Nav className="me-auto">

      {isLogin ? ( 
      <>
      <Nav.Link as={Link} to ="/dashboard-admin">Dashboard Admin</Nav.Link>
      <Nav.Link as={Link} to ="/register">Register</Nav.Link> 
      <Nav.Link onClick={() => {
        Cookies.remove('token')
        navigate('/login')
      }}>Logout</Nav.Link>
      </>
      ) : (
        <Nav.Link as={Link} to ="/login">Login</Nav.Link>
        )}
      
      
      
    </Nav>
    </Container>
  </Navbar>

  
  )
}

export default Header