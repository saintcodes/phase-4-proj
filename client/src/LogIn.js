import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login({ user, setUser, onLogin, setIsLoggedIn, isLoggedIn }) {
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    setFormData((formData) => ({ ...formData, 
      [name]: value 
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        history.push("/games")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setFormData({
      username: "",
      password: "",
    });
  }

  return (
    <div className="App">
      <div className="appForm">
        <div className="formTitle">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>Log In to Game Booker</h2>
          <br></br>
        </div>
        <div className="formCenter">
          <form className="formFields" onSubmit={handleSubmit}>
            <div className="formField">
              <label className="formFieldLabel">Username</label>
              <input
                type="username"
                id="username"
                className="formFieldInput"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel">Password</label>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="formField">
              <button className="formFieldButton">Sign In</button> <br></br>
              <br></br>
              Need a Game Booker account? &nbsp;
              <Link to="/" className="formFieldLink">
                Create one here
              </Link>
              <br></br>
              <br></br>
              <>
                {errors.map((err) => (
                  <div key={err}>{err}</div>
                ))}
              </>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;