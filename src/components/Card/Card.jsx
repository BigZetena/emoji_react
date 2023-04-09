import React from "react";
import "./card.css";

export const Card = ({ title, symbol, keywords }) => {
  return (
    <div className="card">
      {" "}
      <p className="card__icon">{symbol}</p>
      <p className="card__title">{title}</p>
      <p className="card__discription">{keywords}</p>
    </div>
  );
};
