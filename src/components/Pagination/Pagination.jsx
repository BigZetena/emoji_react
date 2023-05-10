import React, {useEffect} from 'react';
import "./pagination.css"



const Pagination = ({cardsPerPage, totalCards, switchPage, currentPage}) => {
    const pageNumbers = []




   console.log(currentPage)

    for (let i=1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }

    if(pageNumbers.length <= 1) {
        return (
            <h1>one page</h1>
        )
    }


    const changeButtonActive = (id) => {
        const ulPagination = document.querySelector(".pagination")
        const buttonsPagination = ulPagination.querySelectorAll("a")
        for (let i = 0; i < buttonsPagination.length; i++) {
            buttonsPagination[i].classList.remove("pagination__item__active");
        }
        const currentButton = document.getElementById(`${id}`);
        currentButton.classList.add("pagination__item__active")
    };

    if(pageNumbers.length <= 6) {
    return (
        <div>
            <ul className="pagination">
                <li className="pagination__item">
                    <a href="#cards" className="pagination__link" onClick={() =>  {switchPage(1); changeButtonActive(1)}}>
                        First
                    </a>
                </li>
                {
                 pageNumbers.map(number => (
                     <li className="pagination__item" key={number}>
                         <a href="#cards" className = {"pagination__link"} id={number} onClick={() => {switchPage(number); changeButtonActive(number)}}>
                             {number}
                         </a>
                     </li>))
                }
                <li className="pagination__item">
                    <a href="#cards"  className="pagination__link" onClick={() => {switchPage(pageNumbers.length); changeButtonActive(pageNumbers.length)}}>
                        Last
                    </a>
                </li>
            </ul>
        </div>
    );}


    let splitPageNumberFirst = [];
    let firstPageHandler = 1;
    if (currentPage === 2) firstPageHandler = 2;
    if (currentPage > 2) firstPageHandler = 3;
    let countsFirstPage = 5;
    let countsLastPage = 3;
    if ((pageNumbers.length - currentPage) < 5) {
        countsFirstPage = 2;
        countsLastPage = 6;
    }

    for (let i = 0; i<countsFirstPage; i++ ) {
        splitPageNumberFirst.push(pageNumbers[currentPage-firstPageHandler]);
        currentPage++;
    }


    const splitPageNumberLast = [];
    for (let i = 1; i<countsLastPage; i++ ) {
        splitPageNumberLast.unshift(pageNumbers[pageNumbers.length-i]);
    }

    return (
        <div>
            <ul className="pagination">
                <li className="pagination__item">
                    <a href="#cards" className="pagination__link" onClick={() =>  {switchPage(1); }}>
                        First
                    </a>
                </li>
                {
                    splitPageNumberFirst.map(number => (
                        <li className="pagination__item" key={number}>
                            <a href="#cards" className = {"pagination__link"} id={number} onClick={() => {switchPage(number); changeButtonActive(number)}}>
                                {number}
                            </a>
                        </li>))
                }
                <li className="pagination__item" key= "threePoints">
                    <a href="#cards"  className="pagination__link">
                        ...
                    </a>
                </li>
                {
                    splitPageNumberLast.map(number => (
                        <li className="pagination__item" key={number}>
                            <a href="#cards" className = {"pagination__link"} id={number} onClick={() => {switchPage(number); changeButtonActive(number)}}>
                                {number}
                            </a>
                        </li>))
                }
                <li className="pagination__item" key = "lastLastButton" >
                    <a href="#cards"  className="pagination__link" onClick={() => {switchPage(pageNumbers.length); changeButtonActive(pageNumbers.length)}}>
                        Last
                    </a>
                </li>
            </ul>
        </div>
    )


};
export default Pagination;