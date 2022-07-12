import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
    

function SignInForm() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

    function handleChange(event) {
      let target = event.target;
      let value = target.type === "checkbox" ? target.checked : target.value;
      let name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log("The form was submitted with the following data:");
      console.log(this.state);
    }
    

  return (
      <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="username">
              Username
            </label>
            <input
              type="username"
              id="username"
              className="formFieldInput"
              placeholder="Enter your username"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/sign-up" className="formFieldLink">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    )
  }

export default SignInForm