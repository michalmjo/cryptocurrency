import "./App.scss";
import { Header } from "./Header";
import { useSelector } from "react-redux";

import List from "./List";
import Navigation from "./Navigation";
import CurrencyPannel from "./CurrencyPannel";

import { reveal } from "../js/main";

window.addEventListener("scroll", reveal);

function App() {
  const dane = useSelector((state) => state.kryptoList);

  console.log(dane.data.length);

  console.log(dane);
  const { data } = dane;
  const listaCrypto = data.map((item) => <List key={item.id} dane={item} />);

  return (
    <>
      <div className="showSliding"></div>
      <div className="wrapper">
        <Header data={data} />
        <h1 className="mainTitle">Cryptocurrency Market Capitalizations</h1>
        <Navigation data={data} />
        <CurrencyPannel />
        <ul>{listaCrypto}</ul>
      </div>
    </>
  );
}

export default App;
