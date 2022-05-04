import "./_Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { show } from "../js/main";

import { useDispatch } from "react-redux";
import { sortCap } from "../actions/action";
import { useState } from "react";
import { searchItem } from "../actions/action";

const Navigation = ({ data }) => {
  const [value, setValue] = useState("");
  const [supUpDown, setSupUpDown] = useState(false);
  const [priceUpDown, setPriceUpDown] = useState(false);
  const [capUpDown, setCapUpDown] = useState(false);
  const dispatch = useDispatch();
  function compareSupplyA(a, b) {
    console.log(a, b);
    const numberA = Number(a.supply);
    const numberB = Number(b.supply);
    if (numberA < numberB) {
      return -1;
    }
    if (numberA > numberB) {
      return 1;
    }
    return 0;
  }

  function compareSupplyB(a, b) {
    const numberA = Number(a.supply);
    const numberB = Number(b.supply);
    return numberB - numberA;
  }
  function comparePriceA(a, b) {
    const numberA = Number(a.priceUsd);
    const numberB = Number(b.priceUsd);
    return numberA - numberB;
  }

  function comparePriceB(a, b) {
    const numberA = Number(a.priceUsd);
    const numberB = Number(b.priceUsd);
    return numberB - numberA;
  }
  function compareCapA(a, b) {
    const numberA = Number(a.marketCapUsd);
    const numberB = Number(b.marketCapUsd);
    return numberA - numberB;
  }

  function compareCapB(a, b) {
    const numberA = Number(a.marketCapUsd);
    const numberB = Number(b.marketCapUsd);
    return numberB - numberA;
  }

  const handleSupply = () => {
    show("all");
    if (!supUpDown) {
      const compare = data.sort(compareSupplyA);
      dispatch(sortCap(compare));
      setSupUpDown(!supUpDown);
    } else {
      const compare = data.sort(compareSupplyB);
      dispatch(sortCap(compare));
      setSupUpDown(!supUpDown);
    }
  };

  const handlePrice = () => {
    show("all");
    if (!priceUpDown) {
      const compare = data.sort(comparePriceA);
      dispatch(sortCap(compare));
      setPriceUpDown(!priceUpDown);
    } else {
      const compare = data.sort(comparePriceB);
      dispatch(sortCap(compare));
      setPriceUpDown(!priceUpDown);
    }
  };
  const handleCap = () => {
    show("all");
    if (!capUpDown) {
      const compare = data.sort(compareCapA);
      dispatch(sortCap(compare));
      setCapUpDown(!capUpDown);
    } else {
      const compare = data.sort(compareCapB);
      dispatch(sortCap(compare));
      setCapUpDown(!capUpDown);
    }
  };

  const upDownSideCap = capUpDown ? (
    <FontAwesomeIcon icon={faAngleDown} className="arrow" />
  ) : (
    <FontAwesomeIcon icon={faAngleUp} className="arrow" />
  );
  const upDownSideSup = supUpDown ? (
    <FontAwesomeIcon icon={faAngleDown} className="arrow" />
  ) : (
    <FontAwesomeIcon icon={faAngleUp} className="arrow" />
  );
  const upDownSidePrice = priceUpDown ? (
    <FontAwesomeIcon icon={faAngleDown} className="arrow" />
  ) : (
    <FontAwesomeIcon icon={faAngleUp} className="arrow" />
  );

  // search area

  const [isInside, setIsinside] = useState(false);
  const [noneMatch, setNoneMatch] = useState(false);

  const newMessage = () => {
    setNoneMatch(true);

    setTimeout(() => {
      setNoneMatch(false);
    }, 2000);
  };
  const message = (
    <span
      style={{
        color: "red",
        fontSize: "1.2rem",
        marginLeft: "10%",
        fontWeight: "bold",
      }}
    >
      Podaj przynajmiej 2 znaki
    </span>
  );
  const messageCrypto = (
    <span
      style={{
        color: "red",
        fontSize: "1.2rem",
        marginLeft: "10%",
        fontWeight: "bold",
      }}
    >
      Nie znaleziono na liście
    </span>
  );

  const handleValueInput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSendForm = (e) => {
    e.preventDefault();
    if (!value) {
      setIsinside(true);
      setTimeout(() => {
        setIsinside(false);
      }, 2000);
      return;
    }

    const index = data.filter((item) => {
      if (item.id !== value) return console.log("bue nas");
      return item.id.toLowerCase() === value.toLocaleLowerCase();
    });
    if (index.length === 0 && value.length >= 1) {
      return newMessage();
    } else {
      dispatch(searchItem(index));
    }
    setValue("");
  };
  return (
    <>
      <nav className="mainNav">
        <div className="mainNav__marketCap">
          <ul className="mainNav__marketCap--trading">
            <li className="mainNav__marketCap--cap" onClick={handleCap}>
              Market Cap {upDownSideCap}
            </li>
            <li className="mainNav__marketCap--price" onClick={handlePrice}>
              Market Price {upDownSidePrice}
            </li>
            <li className="mainNav__marketCap--sup" onClick={handleSupply}>
              Supply {upDownSideSup}
            </li>
            {isInside ? message : null}
            {noneMatch ? messageCrypto : null}
          </ul>
          <form onSubmit={handleSendForm} className="searchForm">
            <input value={value} onChange={handleValueInput} type="text" />
            <button>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search_icon"
              ></FontAwesomeIcon>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
