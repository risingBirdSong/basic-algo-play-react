import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

type strOrNumberOrBoolean = string | number | boolean;

function App() {

  let [numbers, setNumbers] = useState<strOrNumberOrBoolean[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let [curIndex, setCurIndex] = useState(0);
  // let [currentNumber, setCurrentNumber] = useState(curIndex);

  const inc = () => {
    if (curIndex < numbers.length) {
      setCurIndex(curIndex + 1);
    }
    else {
      console.log("done iterating");
    }
  }

  const dec = () => {
    if (curIndex > 0) {
      setCurIndex(curIndex - 1);
    }
    else {
      console.log("done iterating backwards");
    }
  }


  function iterationLogic(arr: strOrNumberOrBoolean[]) {
    return (
      arr.map((x, idx, theArr) => {
        if (idx < arr.length - 1) {
          // if (typeof arr[0] === "number") {
          if (x === numbers[curIndex]) {
            return <React.Fragment> <span className="highlight">{x} </span></React.Fragment>
          }
          else {
            return `${x} , `;
          }
        }
        else {
          if (x === numbers[curIndex]) {
            return <span className="highlight">{`${x}`}</span>
          }
          else {
            return x;
          }
        }
        // }
      })
    )
  }

  return (
    <div className="App">
      <div className="container">
        <div className="buttons">
          <button className="inc" onClick={inc}>inc</button>
          <button className="dec" onClick={dec}>dec</button>
        </div>
        {curIndex < numbers.length ? "" : <h1>all done iterating!</h1>}
        <h2 className="currentNum">{numbers[curIndex]}</h2>
        <h3> numbers : [{iterationLogic(numbers)}]</h3>
      </div>
    </div>
  );
}

export default App;
