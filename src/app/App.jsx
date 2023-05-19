import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import "./global/styles/config.css";
import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import usePagination from "../hooks/usePagination";

function App() {

  const [data, setData] = useState([]); //массив карточек
  const [uniqData, setUniqData] = useState([]); //масив уникальных карточек
  const [cardsPerPage, setCardsPerPage] = useState(12); //кол-во краточек выводимых на одной страничке
  const [currentData, setCurrentData] = useState([])  //массив карточек выводимых на текущей страничке
  const [loading, setLoading] = useState(false); //состояние на момент подгрузки данных




  //Делаем запрос на массив данных
  useEffect(() => {
    setLoading(true);
    const res = fetch("https://emoji.ymatuhin.workers.dev/");
    res.then((data) => data.json()).then((data) => setData(data));
  }, []);

  // При получении данных фильтруем массив, до уникальных значений
  useEffect(() => {
    getUniqData(data);
    setLoading(false);
  }, [data]);

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

  //из инпута поиска
  const searchResult = useInput("")

  //первичный актуальный массив карточек на страничке
  useEffect(() => {
    getCurrentData(uniqData)
  }, [uniqData])

  //обновляем актуальный массив выводимых на страничке карточек, при измененнии данных поисковой строки
  useEffect(() => {
    getCurrentData(uniqData)
  }, [searchResult.value])

  //отрисовка пагинации
  const paginationData = usePagination(currentData, cardsPerPage)

  //из инпута изменения кол-ва карточек на странице
  const pagePerPageList = useInput(cardsPerPage)

  //обновляем кол-во карточек на странице, при изменении инпута
  useEffect(() => {
    setCardsPerPage(pagePerPageList.value)
  },[pagePerPageList.value])


  //функция фильтрации карточек по данным из поисковой строки
  function  getCurrentData(arr) {
    return setCurrentData(arr
        .filter(
            (el) =>
                el.title
                    .toLowerCase()
                    .trim()
                    .includes(searchResult.value.toLowerCase().trim()) ||
                el.keywords
                    .toLowerCase()
                    .trim()
                    .includes(searchResult.value.toLowerCase().trim())
        )
        .map((el) => (
            <Card key={el.title} {...el} />
        )));
  }


  return (
    <div className="App">
      <Header searchResult={searchResult} />
      <Main loading = {loading} currentCard={paginationData.currentCard}  />
      <Footer cardsPerPage = {cardsPerPage} totalCards = {currentData.length} paginationData = {paginationData}  pagePerPageList = {pagePerPageList} />
    </div>)
}

export default App;
