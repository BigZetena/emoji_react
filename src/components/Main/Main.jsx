import React from "react";
import "./main.css";
import { Card } from "../Card/Card";

export const Main = ({ value, data }) => {
  return (
    <main>
      <div className="main__container">
        <div className="main__wrapper">
          {data
            .filter(
              (el) =>
                el.title
                  .toLowerCase()
                  .trim()
                  .includes(value.toLowerCase().trim()) ||
                el.keywords
                  .toLowerCase()
                  .trim()
                  .includes(value.toLowerCase().trim())
            )
            .map((el) => (
              <Card key={el.title} {...el} />
            ))}
        </div>
      </div>
    </main>
  );
};
