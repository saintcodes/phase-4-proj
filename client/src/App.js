import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory, useParams } from "react-router-dom";
import "./App.css";
import Navigate from "./Navigate";
import Home from "./Home";
import NewEventForm from "./NewEventForm";
import Games from "./Games";
import LogIn from "./LogIn";
import Events from "./Events";

function App() {
  const [user, setUser] = useState({});
  const [events, setEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const history = useHistory();
// console.log("app: ", isLoggedIn)
  // const { gameId } = useParams();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Home onLogin={setUser} />;
  function handleLogOut() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    history.push("/log-in");
  }

  function handleLogIn(user) {
    setUser(user);
    setWelcome((welcome) => !welcome);
    console.log(user);
  }

  function selectedGameEvents(gameId) {
    let nid = parseInt(gameId);
    fetch(`/events/${nid}`)
      .then((res) => res.json())
      .then(setEvents(events.filter((event) => nid === event.game_id)))
      .then(console.log(events))
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="appForm">
          <div className="formTitle">
            {isLoggedIn && (
              <Navigate welcome={welcome} user={user} setUser={setUser} />
            )}
            <Switch>
              <Route exact path="/">
                <Home 
                  user={user} 
                  onLogin={handleLogIn} 
                  handleLogOut={handleLogOut} 
                />
              </Route>
              <Route exact path="/games">
                <Games 
                  isLoggedIn={isLoggedIn} 
                  selectedGameEvents={selectedGameEvents}
                />
              </Route>
              <Route exact path="/create">
                <NewEventForm 
                  user={user} 
                  setUser={setUser} 
                />
              </Route>
              <Route exact path="/games/:gameId/events">
                <Events 
                  events={events}
                />
              </Route>
              <Route exact path="/log-in">
                <LogIn
                  user={user}
                  onLogin={handleLogIn}
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
