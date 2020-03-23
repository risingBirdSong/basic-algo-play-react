import React, { useState, useEffect } from "react";

type strOrNumberOrBoolean = string | number | boolean;

interface propsI {
  numbers: number[];
}

const NumbersArray = (props: propsI) => {

  let [numbersToggle, setNumbersToggle] = useState(true);
  let [curIndex, setCurIndex] = useState(0);
  // let [currentNumber, setCurrentNumber] = useState(curIndex);
  const numbers = props.numbers;
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
    <div className="container">
      <div className="buttons">
        <button className="inc" onClick={inc}>inc</button>
        <button className="dec" onClick={dec}>dec</button>
      </div>
      {curIndex < numbers.length ? "" : <h1>all done iterating!</h1>}
      <h2 className="currentNum">{numbers[curIndex]}</h2>
      <h3> numbers : [{iterationLogic(numbers)}]</h3>
    </div>
  )

}

export default NumbersArray;