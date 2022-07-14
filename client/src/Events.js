import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

function Events({events}) {
  // const [events, setEvents] = useState();
  
  // useEffect(() => {
  //   fetch(`/events/${gameId}`)
  //     .then((res) => res.json())
  //     .then((events) => console.log(events));
  // }, []);

  return (
    <div className="cards">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {events &&
        events.map((event) => {
          console.log(event)
          return <EventCard event={event} key={event.id} />
      })}
    </div>
  );
}

export default Events;
