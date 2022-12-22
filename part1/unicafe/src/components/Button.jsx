import React from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={() => onClick((prev) => prev + 1)}>{text}</button>;
};

export default Button;
