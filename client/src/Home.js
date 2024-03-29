import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Home({ setIsLoggedIn, isLoggedIn, user, handleLogOut, onLogin }) {
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    password: "",
    hasAgreed: false,
  });

  function handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    setSignUpForm({ ...signUpForm, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpForm),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        setIsLoggedIn((isLoggedIn) => !isLoggedIn)
        history.push("/games");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleTOS () {
    alert('too late now, no turning back...')
  }

  return (
    <div>
      <div className="App">
        <div className="appForm">
          <div className="formTitle">
              <br></br>
              <br></br>
            <h2>Welcome to Game Booker</h2>
            <span>
              Create a free account below!
            </span>
          </div>
          <div className="formCenter">
            <form onSubmit={handleSubmit} className="formFields">
              <div className="formField">
                <label className="formFieldLabel">Username</label>
                <input
                  type="text"
                  id="username"
                  className="formFieldInput"
                  placeholder="Create a username"
                  name="username"
                  value={signUpForm.username}
                  onChange={handleChange}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel">Password</label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Create a password"
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
                  <a href="" onClick={handleTOS} className="formFieldTermsLink">
                    terms of service
                  </a>
                </label>
              </div>
              <div className="formField">
                <button className="formFieldButton">Sign Up</button> <br></br>
                <br></br>
                <a href="/log-in" className="formFieldLink">
                  I'm already a member
                </a>
              </div>
            </form>
            <>
                {errors.map((err) => (
                  <div key={err}>{err}</div>
                ))}
              </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
