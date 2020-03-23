import React, { useState } from "react";
import { start } from "repl";
import SingleDot from "./singleDot";


const ArrayPlay = () => {
  const startingArray: number[] = Array(1000).fill(0).map((num, idx) => num = idx);
  console.log(startingArray);
  const [grid, setGrid] = useState();
  return (
    <div className="dotContainer">
      {startingArray.map((val) => {
        let moddy = val % 255;
        let halfModdy = Math.floor(moddy / 2);
        let rando = Math.floor(Math.random() * 75)
        console.log("moddy", moddy);
        return <SingleDot dot={val} color={`rgb(${halfModdy * 2 + rando}, 5, ${rando + 75})`} />
      })}
    </div>
  )
}

export default ArrayPlay