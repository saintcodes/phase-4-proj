import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Navigate from "./Navigate";
import Home from "./Home";
import NewEventForm from "./NewEventForm";
import Games from "./Games";
import SignInForm from "./SignInForm";
import Events from "./Events"

function App() {
  const [user, setUser] = useState("")

  // if (!user) return <Games />
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navigate />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/games">
              <Games />
            </Route>
            <Route exact path="/create">
              <NewEventForm />
            </Route>
            <Route exact path="/games/:id">
              <Events />
            </Route>
            <Route exact path="/sign-in">
              <SignInForm 
                user={user} 
                setUser={setUser}
              />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;