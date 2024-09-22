import StockTrend from "../Graphs/StockTendGraph";

export const AllStocksVisualizer = (props) => {
  return (
    <div>
      <div className="AllStocks">
        {props.stocks.map((stock, id) => (
          <div className="AllStocksItem">
            <div className="AllStocksName">
              {stock.name}
              {stock.open > stock.close ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="down"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="up"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
              )}
            </div>
            <div className="AllStocksAmount">${stock.price} per share</div>
            <div className="AllStocksVolume">${stock.volume} in Volume</div>
            <div className="AllStocksSwitcher">
              <input
                type="checkbox"
                checked={stock.favorite}
                onClick={() => {
                  props.dispatch({
                    type: "TOGGLE_FAVORITE",
                    payload: {
                      id: id,
                      favorite: !stock.favorite,
                    },
                  });
                }}
              ></input>
            </div>
            <StockTrend stock={stock} />
          </div>
        ))}
      </div>
    </div>
  );
};
