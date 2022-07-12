import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
// import logo from './images/tix.png'

function Navigate() {

  return (
    <div className='navbar'>
    
      <Container>
        <Nav className="navbar">
        {/* <img 
          src={logo} 
          alt="Tickets" 
          style={{width:50, marginTop: -2}}
        /> */}
        <br></br>
          <Nav.Link 
            className="formTitleLink"
            href="/"
          > 
            Home
          </Nav.Link>
          <br></br>
          <Nav.Link 
            className="formTitleLink"
            href="/games"
          > 
            All Games
          </Nav.Link>
          <br></br>
          <Nav.Link 
            className="formTitleLink"
            href="/create"
          >
            Create a Game
          </Nav.Link>
          {/* <Nav.Link 
            className="formTitleLink"
            href="/sign-in"
          >
            Sign In
          </Nav.Link> */}
        </Nav>
      </Container>
    </div>
  )
}

export default Navigate