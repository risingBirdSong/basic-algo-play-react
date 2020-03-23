import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import NumbersArray from "./components/numbersArray";
import ArrayPlay from "./components/array-play";

function App() {
  const [toggleNumberComponent, settoggleNumberComponent] = useState(false);
  return (
    <div className="wrapper">
      <div className="menu">
        <button onClick={() => {
          settoggleNumberComponent(!toggleNumberComponent);
        }}>toggle numbers</button>
      </div>

      <div className="App">

        {toggleNumberComponent ? <NumbersArray numbers={[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]} />
          : ""}
      </div>
      <div>
        <ArrayPlay />
      </div>
    </div>
  );
}

export default App;
