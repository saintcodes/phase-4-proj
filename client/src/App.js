import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Navigate from "./Navigate";
import Login from "./Login";
import NewGameForm from "./NewGameForm";
import Games from "./Games";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navigate />
          <Switch>
            <Route exact path="/auth">
              <Login />
            </Route>
            <Route exact path="/games">
              <Games />
            </Route>
            <Route exact path="/create">
              <NewGameForm />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;