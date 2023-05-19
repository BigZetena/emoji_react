import React, from "react";
import "./input.css";

export const Input = ({searchResult}) => {

  return (
    <input
        {...searchResult}
      type="text"
      className="input"
      placeholder="Input KeyWords"
    />
  );
};
