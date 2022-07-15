import React from "react";
import EventCard from "./EventCard";

function Events({ user, events, renderUpdatedEvents }) {

  let gameName = events.map((event) => event.game_info.name);

  return (
    <div>
      <div className="App">
        <div className="appForm">
          <div className="formTitle">
            <h2>{gameName[0]}</h2>
            <div className="cards">
              {events ? events.map((event) => {
                return <EventCard 
                  renderUpdatedEvents={renderUpdatedEvents}
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
