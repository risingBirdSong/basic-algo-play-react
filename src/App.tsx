import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import NumbersArray from "./components/numbersArray";


function App() {




  return (
    <div className="App">
      <NumbersArray numbers={[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]} />
    </div>
  );
}

export default App;
