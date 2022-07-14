import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

function Events({events}) {
  // const {name, no_of_players, events} = events
  // let individualEvents = events.events

  console.log(events)
  
  return (
    <div className="cards">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="formTitle">
        <h2></h2>
      </div>
      <br></br>
      {events?
      events.map((event) => {
          // console.log(e.name, e.no_of_players)
          return <EventCard event={event} key={event.id} />
          // return <h1>Hi</h1>
      }):null}
    </div>
  );
}

export default Events;
