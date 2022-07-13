import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function EventCard({event}) {
  const {id, date, time, user_id, event_id, venue_id} = event
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" 
        // src={image}
        />
          <Card.Body>
            <Card.Title>{}</Card.Title>
            <Card.Title>Date: {date}</Card.Title>
            <Card.Title>Time: {time}</Card.Title>
            {/* <Button 
              id={id} 
              variant="primary"
              // onClick={routeChange}
              >
                Show Games
            </Button> */}
            <br></br>
          </Card.Body>
      </Card>
    </div>
  )
}

export default EventCard