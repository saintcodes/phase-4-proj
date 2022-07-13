import React, {useEffect, useState} from 'react'
import EventCard from './EventCard'


function Events() {
  const [events, setEvents] = useState({})

  useEffect(() => {
    fetch('/events')
      .then(res => res.json())
      .then(events=> console.log(events))
  }, [])

  return (
    <div className="cards">
      <br></br>
      <br></br>
      <br></br>
      {events.map((event) => 
        <EventCard
          event={event}
          key={event.id}
        />
      )}
    </div>
  )
}

export default Events