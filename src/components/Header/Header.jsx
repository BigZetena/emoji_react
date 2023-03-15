import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <div>
        <div class="container">
          <div class="header__wraper">
            <div class="header__background">
              <a href="">
                <h1 class="title">Emoji Finder</h1>
                <h2 class="subtitle">Find emoji by keywords</h2>
              </a>
            </div>
            <input type="text" class="input" placeholder="Input KeyWords" />
          </div>
        </div>
      </div>
    </header>
  );
};
