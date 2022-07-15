import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function EventCard({ renderUpdatedEvents, user, event }) {

  function handleDelete(e) {
    let nid = e.target.id;
    fetch(`/events/${nid}}`, {
      method: "DELETE",
    })
      .then(renderUpdatedEvents(nid));
  }

  const handleJoin = () => {
    alert("You have joined this event!")
  }

  return (
    <div>
      <Card className="formFieldInput1" style={{ width: "19rem" }}>
        <br></br>
        <Card.Title className="formFieldLabel1">{event.venue_info}</Card.Title>
        <br></br>
        <Card.Img variant="top" src={event.game_info.image} />
        <Card.Body>
          <Card.Title className="formFieldLabel1">
            Date: {event.date}
          </Card.Title>
          <Card.Title className="formFieldLabel1">
            Time: {event.time}
          </Card.Title>
          <Card.Title className="formFieldLabel1">
            Required Players: {event.game_info.no_of_players}
          </Card.Title>
          <Card.Title className="formFieldLabel1">
            Hosted By: {event.user_name}
          </Card.Title>
          {user.id === event.user_id ? (
            <Button
              className="formFieldButton2"
              id={event.id}
              onClick={handleDelete}
            >
              Cancel Event
            </Button>
          ) : (
            <Button onClick={handleJoin} className="formFieldButton3" id={event.id}>
              Join Event
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventCard;
