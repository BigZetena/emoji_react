import React from "react";
import "./footer.css";
import Pagination from "../Pagination/Pagination";

export const Footer = ({ cardsPerPage, totalCards, paginationData, pagePerPageList}) => {
  return (
    <footer>
        <div className="footer__container">
            <div className="footer__wrapper">
                <Pagination cardsPerPage = {cardsPerPage} totalCards = {totalCards} paginationData = {paginationData}  pagePerPageList = {pagePerPageList} />
            </div>
        </div>
    </footer>
  );
};
