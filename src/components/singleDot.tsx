import React from "react";

interface singleI {
  dot: number;
  color: string;
}

const SingleDot = (props: singleI) => {
  return (
    <p style={{ backgroundColor: props.color }} className="singleDot"></p>
  )
}
export default SingleDot;