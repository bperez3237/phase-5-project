import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';

function App() {

  useEffect(()=> {
    fetch(`/cost_codes`)
      .then(r=>r.json())
      .then((data)=>console.log(data))
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
