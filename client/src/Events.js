import React from "react";
import EventCard from "./EventCard";

function Events({ user, events, setEvents}) {
  // const {name, no_of_players, events} = events
  // let individualEvents = events.events

  let gameName = events.map((event) => event.game_info.name);
  console.log(events);

  return (
    <div>
      <div className="App">
        <div className="appForm">
          <div className="formTitle">
            <h2>{gameName[0]}</h2>
            <div className="cards">
              {events ? events.map((event) => {
                return <EventCard 
                  setEvents={setEvents}
                  event={event} 
                  user={user}
                  key={event.id} 
                />
              }) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
