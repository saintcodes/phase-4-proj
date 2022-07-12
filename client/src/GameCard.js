import React, {useState} from 'react'
import NewEventForm from './NewEventForm'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'

function GameCard({game, selectedGame}) {
  const {name, image, no_of_players, id} = game;
  const history = useHistory();

  function routeChange(e) {
    let id = e.target.id
    let path = `game/${id}`
    history.push(path)
    selectedGame(id)
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" 
        src={image}
        />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>Required players: {no_of_players}</Card.Title>
            <Button 
              id={id} 
              variant="primary"
              onClick={routeChange}
              >
                Show Games
            </Button>
            <br></br>
          </Card.Body>
      </Card>
    </div>
  )
}

export default GameCard