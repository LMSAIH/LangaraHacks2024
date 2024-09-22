
import StockTrend from "../Graphs/StockTendGraph"

export const AllStocksVisualizer = (props) => {

    return (
        <div>
            <div className="AllStocks">
                {

                    props.stocks.map((stock, id) => <div className="AllStocksItem">
                        <div className="AllStocksName">
                            {stock.name}
                        </div>
                        <div className="AllStocksAmount">
                            ${stock.price} per share
                        </div>
                        <div className="AllStocksVolume">
                        ${stock.volume} in Volume
                        </div>
                        <div className="AllStocksSwitcher">
                            <input type="checkbox" checked={stock.favorite}
                                onClick={() => {
                                    props.dispatch({
                                        type: "TOGGLE_FAVORITE", payload: {
                                            id: id,
                                            favorite: !stock.favorite
                                        }
                                    })
                                }}></input>
                        </div>
                        <StockTrend stock = {stock} />
                    </div>)
                }
            </div>
        </div>

    )
}