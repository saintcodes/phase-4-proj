import React, {useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function EventCard({event}) {
  // const {id, date, time, user_id, event_id, venue_id} = event

  // useEffect(() => {
  //   fetch('/events/1')
  //   .then((res) => res.json()
  //   .then((events) => console.log(events)))
  // }, [])

  return (
    <div>
      <h2>{event.game_info.name}</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" 
        src={event.game_info.image}
        />
          <Card.Body>
            {/* <Card.Title>{event.game_info.name}</Card.Title> */}
            <Card.Title>Venue: {event.venue_info}</Card.Title>
            <Card.Title>Date: {event.date}</Card.Title>
            <Card.Title>Time: {event.time}</Card.Title>
            <br></br>
          </Card.Body>
      </Card>
    </div>
  )
}

export default EventCard