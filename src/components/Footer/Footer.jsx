import React from "react";
import "./footer.css";
import Pagination from "../Pagination/Pagination";

export const Footer = ({ cardsPerPage, totalCards, switchPage, currentPage }) => {
  return (
    <footer>
        <div className="footer__container">
            <div className="footer__wrapper">
                <Pagination cardsPerPage = {cardsPerPage} totalCards = {totalCards} switchPage = {switchPage} currentPage = {currentPage} />
            </div>
        </div>
    </footer>
  );
};
