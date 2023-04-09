import React from "react";
import "./header.css";
import { Input } from "../Input/Input";

export const Header = ({ value, inputHandler }) => {
  return (
    <header>
      <div>
        <div className="container">
          <div className="header__wraper">
            <div className="header__background">
              <a href="">
                <h1 className="title">Emoji Finder</h1>
                <h2 className="subtitle">Find emoji by keywords</h2>
              </a>
            </div>
            <Input value={value} inputHandler={inputHandler} />
          </div>
        </div>
      </div>
    </header>
  );
};
