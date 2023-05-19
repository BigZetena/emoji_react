import React from "react";
import "./main.css";

export const Main = ({loading, currentCard}) => {


  if (loading) {
      return <h2 className="main__loading">Loading...</h2>
  }

  return (
    <main>
      <div className="main__container" id="cards">
        <div className="main__wrapper">
          {currentCard}
        </div>
      </div>
    </main>
  );
};
