import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((acc, item) => {
    return acc + item.exercises;
  }, 0);
  return (
    <>
      <p>
        <b>total {total} of exercises</b>
      </p>
    </>
  );
};

export default Total;
