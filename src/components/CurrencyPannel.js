import { useState } from "react";
import { useDispatch } from "react-redux";
import "./_CurrencyPannel.scss";
import { loadData } from "../actions/action";
import { show } from "../js/main";
const URL = `https://api.coincap.io/v2/assets`;

const CurrencyPannel = () => {
  const [currency, setCurrency] = useState("dollar");
  const dispatch = useDispatch();

  const handleChangeCurrency = (e) => setCurrency(e.target.value);

  const showAllCrypto = () => {
    show("all");
    fetch(URL)
      .then((res) => res.json())
      .then((data) => dispatch(loadData(data.data)));
  };
  return (
    <>
      <div className="pannel">
        <div className="pannel__pair">
          <button onClick={showAllCrypto}>Show All Crypto</button>
        </div>
        <div className="pannel__cash">
          <form>
            <select
              value={currency}
              onChange={handleChangeCurrency}
              name="currency"
            >
              <option value="dollar">USD</option>
              <option value="euro">EUR</option>
            </select>
          </form>
        </div>
      </div>

      <div className="panell_info">
        <div className="pannel_info--type pannel_all">
          <p>#</p>
        </div>
        <div className="pannel_info--type pannel_name">
          <p>Name</p>
        </div>
        <div className="pannel_info--type pannel_cap">
          <p>MarketCap</p>
        </div>
        <div className="pannel_info--type pannel_price">
          <p>Price</p>
        </div>
        <div className="pannel_info--type pannel_sup">
          <p>Supply</p>
        </div>
      </div>
    </>
  );
};

export default CurrencyPannel;
