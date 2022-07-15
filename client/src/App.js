import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Navigate from "./Navigate";
import Home from "./Home";
import NewEventForm from "./NewEventForm";
import Games from "./Games";
import LogIn from "./LogIn";
import Events from "./Events";

function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const history = useHistory();
  const [rerender, setRerender] = useState(false);

  console.log("isloggedIn from app: ", isLoggedIn)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Home onLogin={setUser} />;
  
  console.log(user, isLoggedIn)
  
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
    console.log(nid === 1)
    fetch(`/games/${nid}`)
      .then((res) => res.json())
      .then(events => {
        setEvents(events.events)
      })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="appForm">
          <div className="formTitle">
            {isLoggedIn && (
              <Navigate 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                welcome={welcome} 
                user={user} 
                setUser={setUser}
              />
            )}
            <Switch>
              <Route exact path="/">
                <Home 
                  user={user} 
                  onLogin={handleLogIn} 
                  isLoggedIn={isLoggedIn} 
                  setIsLoggedIn={setIsLoggedIn}
                  handleLogOut={handleLogOut} 
                />
              </Route>
              <Route exact path="/games">
                <Games 
                  user={user} 
                  isLoggedIn={isLoggedIn} 
                  selectedGameEvents={selectedGameEvents}
                />
              </Route>
              <Route exact path="/create">
                <NewEventForm 
                  user={user} 
                  setUser={setUser} 
                  isLoggedIn={isLoggedIn}
                />
              </Route>
              <Route exact path="/games/:gameId/events">
                <Events 
                  user={user}
                  setEvents={setEvents}
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
