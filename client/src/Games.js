import React, {useEffect, useState} from 'react'
import GameCard from './GameCard'

function Games() {
  const [games, setGames] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/games')
      .then(res => res.json())
      .then(games => setGames(games))
  }, [])

  function selectedGame (id) {
    let nid = parseInt(id)
      fetch('/events')
        .then(res => res.json())
        .then(setEvents(events.filter((event) => nid === event.id)))
  }

  return (
    <div>
      <div className="cards">
        {games.map((game) => 
        <GameCard
          selectedGame={selectedGame}
          game={game}
          key={game.id}
        />
        )}
      </div>
    </div>
  )
}

export default Games