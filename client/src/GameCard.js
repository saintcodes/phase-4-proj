import React, {useState} from 'react'
// import NewEventForm from './NewEventForm'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'

function GameCard({game, selectedGameEvents}) {
  const {name, image, no_of_players, id} = game;
  const history = useHistory();

  function routeChange(e) {
    let id = e.target.id
    let path = `games/${id}/events`
    selectedGameEvents(id)
    history.push(path)
  }

  return (
    <div>
      <Card className="formFieldInput1" style={{ width: '19rem'}}>
        <br></br>
        <Card.Title className="formFieldLabel1">{name}</Card.Title>
        <Card.Title className="formFieldLabel2">Required players: {no_of_players}</Card.Title>
        <br></br>
        <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Button 
              className="formFieldButton1"
              id={id} 
              variant="primary"
              onClick={routeChange}
              >
                Show Events
            </Button>
            <br></br>
          </Card.Body>
      </Card>
    </div>
  )
}

export default GameCard