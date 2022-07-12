import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInForm from "./SignInForm";

function Home() {
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    password: "",
    hasAgreed: false
  })

  function handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    setSignUpForm({...signUpForm,
      [name]: value});
    console.log(name, value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  return (
    <div>
      <div className="App">
        <div className="appForm">
        <div className="formTitle">
          <h2>Welcome to Game Booker</h2>
          <span>
            Create an account or{" "} 
              <a href="/sign-in">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/sign-in">
                    <SignInForm />
                  </Route>
                </Switch>
              </BrowserRouter>
            log in
              </a>
          </span>
        </div>
          <div className="formCenter">
            <form onSubmit={handleSubmit} className="formFields">
              <div className="formField">
                <label className="formFieldLabel">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="formFieldInput"
                  placeholder="Enter username"
                  name="username"
                  value={signUpForm.username}
                  onChange={handleChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                  value={signUpForm.password}
                  onChange={handleChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldCheckboxLabel">
                  <input
                    className="formFieldCheckbox"
                    type="checkbox"
                    name="hasAgreed"
                    value={signUpForm.hasAgreed}
                    onChange={handleChange}
                  />{" "}
                  I have read and acknowledge the statements in the{" "}
                  <a href="null" className="formFieldTermsLink">terms of service</a>
                </label>
              </div>
              <div className="formField">
                <button className="formFieldButton">Sign Up</button>{" "}
                  <br></br>
                  <br></br>
                <a href="/sign-in" className="formFieldLink">
                I'm already a member
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home