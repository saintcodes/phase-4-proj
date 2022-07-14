import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

function Games({ isLoggedIn, selectedGameEvents }) {
  const [games, setGames] = useState([]);
  // const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/games")
      .then((res) => res.json())
      .then((games) => setGames(games));
  }, []);

  // function selectedGameEvents(gameId) {
  //   let nid = parseInt(gameId);
  //   fetch(`/events/${nid}`)
  //     .then((res) => res.json())
  //     .then(setEvents(events.filter((event) => nid === event.game_id)));
  // }

  console.log("is logged in games: ", isLoggedIn);
  return (
    <div>
      <div className="App">
        <div className="appForm">
          <div className="formTitle">
            <div className="cards">
              {games.length > 0 &&
                games.map((game) => (
                  <GameCard
                    selectedGameEvents={selectedGameEvents}
                    game={game}
                    key={game.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
