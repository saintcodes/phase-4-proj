import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function NewEventForm({isLoggedIn, user, setUser}) {
  const [formData, setFormData] = useState({
    "game": "",
    "venue": "",
    "date": "",
    "time": ""
  })

  function handleChange(e) {
    console.log(e.target)
    const {name, value} = e.target
    console.log(name, value)
    setFormData((formData) => ({...formData,
      [name]: value
    }));
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/create", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div className="App">
    <div className="appForm">
    <div className="formTitle">      
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label
          for='game'
        > Game: </label>
        <select id="game" name="game" onChange={handleChange} value={formData.game}>
          <option value="" disable selected>Select a game</option>
          <option value="Basketball-Full Court">Basketball-Full Court</option>
          <option value="Basketball-Half Court">Basketball-Half Court</option>
          <option value="Baseball">Baseball</option>
          <option value="Pickleball">Pickleball</option>
          <option value="Handball-Singles">Handball-Singles</option>
          <option value="Handball-Doubles">Handball-Doubles</option>
          <option value="Tennis-Singles">Tennis-Singles</option>
          <option value="Tennis-Doubles">Tennis-Doubles</option>
          <option value="Poker">Poker</option>
          <option value="Volleyball">Volleyball</option>
        </select>
      <br></br>
      <br></br>
        <label
          for='venue'
        > Venue: </label>
        <select id="venue" name="venue" onChange={handleChange} value={formData.venue}>
          <option value="" disable selected>Select a venue</option>
          <option value="Park1">Park1</option>
          <option value="Park2">Park2</option>
          <option value="Park3">Park3</option>
          <option value="Park4">Park4</option>
        </select>
      <br></br>
      <br></br>
        <div className="row">
          <div className="col-md-4">
            <Form.Group controlId="dob">
              <Form.Label> Date: </Form.Label>
              <Form.Control type="date" name="date" onChange={handleChange} value={formData.date} />
            </Form.Group>
          </div>
        </div>
      <br></br>
        <label
          for='time'
        > Time: </label>
        <select id="time" name="time" onChange={handleChange} value={formData.time}>
          <option value="" disable selected>Select a time</option>
          <option value="12:00PM">12:00PM</option>
          <option value="03:00PM">3:00PM</option>
          <option value="06:00PM">6:00PM</option>
          <option value="09:00PM">9:00PM</option>
        </select>
        <br></br>
        <br></br>
        <button type="button" name="submit">Create</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default NewEventForm

