import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
export default function Navv() {
    return (
        <div>
            <Navbar collapseOnSelect  expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand href="#">
    <img
        src="../images/logo.png"
        width="200"
        height="200"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      
    </Navbar.Brand>


   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link  eventKey={2} href="/contacts">
        <strong style={{color:'grey',fontWeight:'600'}}>CONTACT US</strong>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
    
  </Container>
</Navbar>          
        </div>
    )
}
