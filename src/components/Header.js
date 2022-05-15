import React from 'react'
import {Navbar, Nav,Container, Row, NavDropdown} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import {LinkContainer} from 'react-router-bootstrap'


function Header(){
  return(
  <header>

  <Navbar variant="dark" className="color-nav" expand="lg">
  <Container>
    <LinkContainer to='/'>
      <Navbar.Brand>Your Shop</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
        
      
        <NavDropdown title="Products" id="basic-nav-dropdown">
        <LinkContainer to='/'><NavDropdown.Item>Action</NavDropdown.Item></LinkContainer>
        <LinkContainer to='/'><NavDropdown.Item>Another action</NavDropdown.Item></LinkContainer>
        <LinkContainer to='/'><NavDropdown.Item>Something</NavDropdown.Item></LinkContainer>
        
        <NavDropdown.Divider />
        <LinkContainer to='/'><NavDropdown.Item>Separated link</NavDropdown.Item></LinkContainer>
        
      </NavDropdown>
      <InputGroup>
      <FormControl
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"/>
      <InputGroup.Append>
      
      <Button variant="outline-secondary">Button</Button>
      
    </InputGroup.Append>
    <LinkContainer to='/'><Nav.Link>Cart</Nav.Link></LinkContainer>
      <LinkContainer to='/'><Nav.Link>Login</Nav.Link></LinkContainer>
  </InputGroup>
      
    </Nav>
    
  
  </Navbar.Collapse>
    </Container>


</Navbar>
  </header>


  )
}

export default Header
