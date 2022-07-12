import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignInForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

    function handleChange(event) {
      let target = event.target;
      let value = target.type === "checkbox" ? target.checked : target.value;
      let name = target.name;
      setFormData((formData) => ({...formData,
        [name]: value
      }));
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log("The form was submitted with the following data:");
      console.log(this.state);
    }

  return (
    <div className="App">
        <div className="appForm">
        <div className="formTitle">
        <h2>Welcome to Game Booker</h2>
        </div>
      <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel">
              Username
            </label>
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
            <label className="formFieldLabel">
              Password
            </label>
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
            <button className="formFieldButton">Sign In</button>{" "}
            <br></br>
            <br></br>
            <Link to="/sign-up" className="formFieldLink">
              Create an account
            </Link>
          </div>
        </form>
      </div>
      </div>
      </div>
    )
  }

export default SignInForm