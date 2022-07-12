import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function NewEventForm() {
  const [formData, setFormData] = useState({
    "game": "",
    "venue": "",
    "date": "",
    "time": ""
  })

  function handleChange(e) {
    const {name, value} = e.target
    console.log(name, value)
    setFormData((formData) => ({...formData,
      [name]: value
    }));
  }

  function handleSubmit(e) {

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
        <select id="game" name="game">
          <option value="" disable selected>Select a game</option>
          <option value={formData.game} onchange={handleChange}>Basketball-Full Court</option>
          <option value={formData.game} onchange={handleChange}>Basketball-Half Court</option>
          <option value={formData.game} onchange={handleChange}>Baseball</option>
          <option value={formData.game} onchange={handleChange}>Pickleball</option>
          <option value={formData.game} onchange={handleChange}>Handball-Singles</option>
          <option value={formData.game} onchange={handleChange}>Handball-Doubles</option>
          <option value={formData.game} onchange={handleChange}>Tennis-Singles</option>
          <option value={formData.game} onchange={handleChange}>Tennis-Doubles</option>
          <option value={formData.game} onchange={handleChange}>Poker</option>
          <option value={formData.game} onchange={handleChange}>Volleyball</option>
        </select>
      <br></br>
      <br></br>
        <label
          for='venue'
        > Venue: </label>
        <select id="venue" name="venue">
          <option value="" disable selected>Select a venue</option>
          <option value={formData.venue} onchange={handleChange}>Park1</option>
          <option value={formData.venue} onchange={handleChange}>Park2</option>
          <option value={formData.venue} onchange={handleChange}>Park3</option>
          <option value={formData.venue} onchange={handleChange}>Park4</option>
        </select>
      <br></br>
      <br></br>
        <div className="row">
          <div className="col-md-4">
            <Form.Group controlId="dob">
              <Form.Label> Date: </Form.Label>
              <Form.Control type="date" name="date" onchange={handleChange} value={formData.date} />
            </Form.Group>
          </div>
        </div>
      <br></br>
        <label
          for='time'
        > Time: </label>
        <select id="time" name="time">
          {/* <placeholder="select a time"> */}
          <option value="" disable selected>Select a time</option>
          <option value={formData.time} onchange={handleChange}>12:00PM</option>
          <option value={formData.time} onchange={handleChange}>3:00PM</option>
          <option value={formData.time} onchange={handleChange}>6:00PM</option>
          <option value={formData.time} onchange={handleChange}>9:00PM</option>
        </select>
        <br></br>
        <br></br>
        <input
          type="button"
          name="submit"
          value="Create"
        />
      </form>
      </div>
      </div>
      {/* <form className="add-toy-form small">
        <h4>Add New Game</h4>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Event Name"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Date: YYYY/MM/DD"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Time: HH:MM AM/PM"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          placeholder="Venue"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          placeholder="Artist"
          className="input-text"
        />
        <br></br>
        <br />
        <input
          type="submit"
          name="submit"
          value="Add Event"
          className="submit"
        />
      </form> */}
    </div>
  )
}

export default NewEventForm

