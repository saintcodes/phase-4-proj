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
    console.log(isLoggedIn)
  }

  return (
    <div className="navbar">
      {user && (
        <Container>
          <Nav className="navbar">
            <br></br>
            {welcome ? `Welcome back, ${user.username}!` : ""}
            <Nav.Link className="formTitleLink" href="/games">
              All Games
            </Nav.Link>
            <Nav.Link className="formTitleLink" href="/create">
              Create a Game
            </Nav.Link>
            <Nav.Link className="formTitleLink" onClick={handleLogoutClick} href="/">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      )}
    </div>
  );
}

export default Navigate;
