import React, {useState} from 'react'

function NewGameForm() {
  const [formData, setFormData] = useState({
    "name": "",
    "date": "",
    "time": "",
    "venue": "",
    "artist": "",
  })

  return (
    <div className="container">
      <div>
        <label
          for='game'
        >Select a game:</label>
        <select id="game" name="game">
          <option value="basketball">Basketball</option>
        </select>
      </div>
      <form className="add-toy-form small">
        <h4>Add New Game</h4>
        <input
          type="text"
          name="name"
          value={formData.name}
          // onChange={handleChange}
          placeholder="Event Name"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="date"
          value={formData.date}
          // onChange={handleChange}
          placeholder="Date: YYYY/MM/DD"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="time"
          value={formData.time}
          // onChange={handleChange}
          placeholder="Time: HH:MM AM/PM"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="venue"
          value={formData.venue}
          // onChange={handleChange}
          placeholder="Venue"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="artist"
          value={formData.artist}
          // onChange={handleChange}
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
      </form>
    </div>
  )
}

export default NewGameForm

