import React,from 'react';
import "./pagination.css"
import PaginationCardsPerPage from "../PaginationCardsPerPage/PaginationCardsPerPage";
import clsx from "clsx";



const Pagination = ({paginationData,  pagePerPageList}) => {
    const {pageNumbers, switchPage, currentPage, lastPage} = paginationData;

    if(pageNumbers.length <= 1) {
        return (
            <p className="pagination__button_disable">one page</p>
        )
    }


    return (
        <div className="pagination__wrapper">
            <ul className="pagination">
                <li className="pagination__button">
                    <a  href="#cards" className = {clsx("pagination__button_text", {"pagination__button_disable": 1 === currentPage})} onClick={() =>  {switchPage(1)}}>
                        First
                    </a>
                </li>
                {
                 pageNumbers.map(number => (
                     <li className="pagination__item" key={number}>
                         <a href="#cards" className = {clsx("pagination__link", {"pagination__item_active": number === currentPage})} id={number} onClick={() => {switchPage(number)}}>
                             {number}
                         </a>
                     </li>))
                }
                <li className={clsx( "pagination__button", {"pagination__button_hover":lastPage !== currentPage})}>
                    <a href="#cards"  className = {clsx("pagination__button_text", {"pagination__button_disable": lastPage === currentPage})} onClick={() => {switchPage(lastPage)}}>
                        Last
                    </a>
                </li>
            </ul>
            <PaginationCardsPerPage pagePerPageList={pagePerPageList}/>
        </div>
    );





};
export default Pagination;