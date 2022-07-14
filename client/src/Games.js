import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

function Games({ user, isLoggedIn, selectedGameEvents }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games")
      .then((res) => res.json())
      .then((games) => setGames(games));
  }, []);


  console.log("is logged in games: ", isLoggedIn);

  return (
    <div>
      <div className="App">
        <div className="appForm">
          <div className="formTitle">
            <h2>All Games</h2>
            {console.log(user)}
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
