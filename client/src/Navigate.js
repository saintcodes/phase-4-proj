import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function Navigate({ welcome, user, setUser }) {
  // const { username } = user;
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
            <Button variant="outline" onClick={handleLogoutClick}>
              Logout
            </Button>
          </Nav>
        </Container>
      )}
    </div>
  );
}

export default Navigate;
