import React from 'react'
import {Navbar, Nav,Container, Row, NavDropdown} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import '../components/style.css'
function Header(){
  return(
  <header>

  <Navbar variant="dark" className="color-nav" expand="lg">
  <Container>
  <Navbar.Brand href="#home">Your Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Cart</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <InputGroup>
    <FormControl
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
  </InputGroup>
  
  </Navbar.Collapse>
    </Container>


</Navbar>
  </header>


  )
}

export default Header
