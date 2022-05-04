import "./List.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { addingComma } from "./Header";
import { useDispatch } from "react-redux";
import { deleteItem } from "../actions/action";

const List = ({ dane }) => {
  const dispatch = useDispatch();

  const { id, marketCapUsd, priceUsd, rank, supply, symbol } = dane;

  const str = id.charAt(0).toUpperCase() + id.slice(1);
  const usdCap = addingComma.format(marketCapUsd);

  const handleDeleteCrypto = () => {
    dispatch(deleteItem({ id }));
  };

  return (
    <>
      <li className="currency">
        <div className="crypto__list">
          <p className="crypto__list crypto_rank"> {parseInt(rank)}</p>
          <p className="crypto__list crypto_id">
            <span style={{ fontWeight: "bold", color: "wheat" }}>{str}</span>
          </p>
          <p className="crypto__list crypto_cap">{`${usdCap} $`}</p>
          <p className="crypto__list crypto_price">
            {/* {Number(priceUsd).toFixed(2) + "$"} */}
            {`${Number(priceUsd).toFixed(4)} $`}
          </p>

          <p className="crypto__list crypto_suppy">
            {`${parseInt(supply).toFixed(0)}  ${symbol}`}
          </p>
          <button onClick={handleDeleteCrypto} className="btn_delete">
            <FontAwesomeIcon icon={faTrash} className="btn_delete--trash" />
          </button>
        </div>
      </li>
    </>
  );
};

export default List;
