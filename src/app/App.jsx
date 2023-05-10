import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import "./global/styles/config.css";
import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [uniqData, setUniqData] = useState([]);


  // const [cards, setcards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(12);



  useEffect(() => {
    setLoading(true);
    const res = fetch("https://emoji.ymatuhin.workers.dev/");
    res.then((data) => data.json()).then((data) => setData(data));

  }, []);

  useEffect(() => {
    setLoading(true);
    getUniqData(data);
    setLoading(false);
  }, [data]);



  const inputHandler = (evt) => {
    setValue(evt.target.value);
    setCurrentPage(1);
  };



  function getUniqData(arr) {
    const arrCopy = [];
    arr.forEach((item) => {
      arrCopy.push({
        ...item,
        keywords: [...new Set(item.keywords.split(" "))].join(" "),
      });
    });
    return setUniqData(arrCopy);
  }

  let currentData = data
      .filter(
          (el) =>
              el.title
                  .toLowerCase()
                  .trim()
                  .includes(value.toLowerCase().trim()) ||
              el.keywords
                  .toLowerCase()
                  .trim()
                  .includes(value.toLowerCase().trim())
      )
      .map((el) => (
          <Card key={el.title} {...el} />
      ));

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCard = currentData.slice(firstCardIndex, lastCardIndex);

  const switchPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  return (
    <div className="App">
      <Header value={value} inputHandler={inputHandler} />
      <Main loading={loading} currentCard = {currentCard}  />
      <Footer cardsPerPage = {cardsPerPage} totalCards = {currentData.length} switchPage = {switchPage} currentPage = {currentPage} />
    </div>)
}

export default App;
