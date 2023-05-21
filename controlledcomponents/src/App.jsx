import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("")
    console.log('Form submitted');
  };

  const handlechange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handlechange}
            />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
