import React from "react";

const Total = ({ parts }) => {
  let result = 0;
  parts.forEach((part) => (result += part.exercises));
  return (
    <>
      <p>Number of exercises {result}</p>
    </>
  );
};

export default Total;
