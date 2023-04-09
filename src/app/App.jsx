import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import "./global/styles/config.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [uniqData, setUniqData] = useState([]);

  useEffect(() => {
    const res = fetch("https://emoji.ymatuhin.workers.dev/");
    res.then((data) => data.json()).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getUniqData(data);
  }, [data]);

  const inputHandler = (evt) => {
    setValue(evt.target.value);
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

  return (
    <div className="App">
      <Header value={value} inputHandler={inputHandler} />
      <Main data={uniqData} value={value} />
      <Footer />
    </div>
  );
}

export default App;
