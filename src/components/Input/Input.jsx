import React, { useState } from "react";
import "./input.css";

export const Input = ({ value, inputHandler }) => {
  return (
    <input
      value={value}
      onChange={(evt) => inputHandler(evt)}
      type="text"
      className="input"
      placeholder="Input KeyWords"
    />
  );
};
