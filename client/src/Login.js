import React, { Component } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";

import "./App.css";

function Login() {
  return (
    <BrowserRouter>
      {/* <Route basename="auth"> */}
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="formTitle">
              <NavLink
                to="/sign-in"
                // activeclassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                to="/sign-up"
                // activeclassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>
          <Switch>
            <Route exact path="sign-in">
              <SignInForm />
            </Route>
            <Route exact path="sign-up">
              <SignUpForm />
            </Route>
          </Switch>
          </div>
        </div>
        {/* </Route> */}
      </BrowserRouter>
  )
}

export default Login