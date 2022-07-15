import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function EventCard({setEvents, user, event}) {
 
  function handleDelete(e) {
    let nid = parseInt(e.target.id)
    console.log(typeof e.target.id)
    console.log(parseInt(e.target.id))
    fetch(`/events/${nid}`, {
      method: "DELETE"
    })
    .then(setEvents)
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img 
          variant="top" 
          src={event.game_info.image}
        />
          <Card.Body>
            <Card.Title>Venue: {event.venue_info}</Card.Title>
            <Card.Title>Date: {event.date}</Card.Title>
            <Card.Title>Time: {event.time}</Card.Title>
            <Card.Title>Required Players: {event.game_info.no_of_players}</Card.Title>
            <Card.Title>Created By: {event.user_name}</Card.Title>
            { user.id === event.user_id ?
              <Button 
              variant="outline-danger"
              id={event.id} 
              onClick={handleDelete}
              >
                Cancel Event
              </Button> 
            : 
              <Button 
              variant="primary"
              id={event.id} 
              >
                Join Event
              </Button> 
            }
          </Card.Body>
      </Card>
    </div>
  )
}

export default EventCard