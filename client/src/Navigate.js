import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";

function Navigate({ setIsLoggedIn, isLoggedIn, welcome, user, setUser }) {
  const history = useHistory();

  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/");
      }
    });
    setIsLoggedIn((isLoggedIn) => !isLoggedIn)
  }

  return (
    <Container>
      {user && (
        <Nav className="navbar">
          <br></br>
            <span className="formTitleLink2">
              Welcome back, {user.username}!
            </span> 
          <Nav.Link 
            className="formTitleLink3" 
            href="/games"
          >
            All Games
          </Nav.Link>
          <Nav.Link 
            className="formTitleLink3" 
            href="/create"
          >
            Create New Event
          </Nav.Link>
          <Nav.Link 
            className="formTitleLink3" 
            onClick={handleLogoutClick} 
            href="/"
          >
            Logout
          </Nav.Link>
        </Nav>
      )}
    </Container>
  );
}

export default Navigate;
