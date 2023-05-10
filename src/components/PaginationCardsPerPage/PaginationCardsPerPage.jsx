import React from 'react';
import "./paginationCarsPerPage.css";

function PaginationCardsPerPage({listHandler} ) {
    return (
        <div className="pageSelect__wrapper">
            <p className="pageSelect__text">Per page</p>
            <select name="pageSelect" id="" className="pageSelect" onChange={(evt) => listHandler(evt)}>
                <option value="12" >12</option>
                <option value="24">24</option>
                <option value="48">48</option>
            </select>
        </div>
    );
}

export default PaginationCardsPerPage;