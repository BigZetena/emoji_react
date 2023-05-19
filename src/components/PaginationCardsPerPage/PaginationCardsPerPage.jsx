import React from 'react';
import "./paginationCarsPerPage.css";

function PaginationCardsPerPage({pagePerPageList} ) {
    return (
        <div className="pageSelect__wrapper">
            <p className="pageSelect__text">Per page</p>
            <select name="pageSelect" id="" className="pageSelect" {...pagePerPageList}>
                <option value="12" >12</option>
                <option value="24">24</option>
                <option value="48">48</option>
            </select>
        </div>
    );
}

export default PaginationCardsPerPage;