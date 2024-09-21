export const FavoriteStocksVisualizer = (props) => {
    

    return (
        <div>
            {props.stocks.map((stock, id) => {
                if (stock.favorite) {
                    return (
                        <div>
                        <div>
                            Name: {stock.name}
                        </div>
                        <div>
                            Amount: {stock.amount}
                        </div>
                        <hr/>
                    </div>
                    )
                } else {
                    return
                }
               })}
        </div>
    )
}