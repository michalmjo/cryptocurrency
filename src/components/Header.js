import "./_Header.scss";
export const addingComma = new Intl.NumberFormat("en-US");

export const Header = ({ data }) => {
  console.log(data);
  const marketCap = data.reduce((acc, current) => {
    const number = parseInt(current.marketCapUsd);
    return acc + number;
  }, 0);

  const newFormat = addingComma.format(marketCap);

  return (
    <>
      <header>
        <div className="crypto">
          <div className="crypto__cryptocurrencies">
            <div>
              <p>
                Cryptocurrencies:<span> {data.length} </span>{" "}
              </p>
            </div>
            <div>
              <p>
                Markets:<span>1374</span>{" "}
              </p>
            </div>
          </div>
          <div className="crypto__marketcap">
            <div>
              <p>
                MarketCap:<span> {`${newFormat} $`} </span>{" "}
              </p>
            </div>
            <div>
              <p>
                24h vol:<span> {`${newFormat} $`} </span>{" "}
              </p>
            </div>
            <div>
              <p>
                BTC Dominance: <span>55%</span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
