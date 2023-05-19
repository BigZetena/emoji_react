import {useEffect, useState} from "react";

export default function usePagination(currentData, cardsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const currentCard = currentData.slice(firstCardIndex, lastCardIndex);
    useEffect(() => {
        switchPage(1)
    }, [currentData])

    const switchPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const allPageNumbers = []
    const totalCards = currentData.length

    for (let i=1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
       allPageNumbers.push(i)
    }

    const lastPage = allPageNumbers.length;
    let pageNumbers = allPageNumbers
    if (allPageNumbers.length > 5) {
        pageNumbers = allPageNumbers.slice(currentPage - 3, currentPage + 2)

        if (currentPage === 1 || currentPage === 2 ) {
            pageNumbers = allPageNumbers.slice(0, 5)
        }

        if (currentPage === lastPage || currentPage === (lastPage - 1) ) {
            pageNumbers = allPageNumbers.slice((lastPage - 5), lastPage)
        }

    }


    return {
        pageNumbers,
        switchPage,
        currentPage,
        currentCard,
        lastPage
    }
};