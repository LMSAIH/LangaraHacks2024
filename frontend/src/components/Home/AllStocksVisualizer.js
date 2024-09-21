export const AllStocksVisualizer = (props) => {
    console.log(props.stocks);
    console.log(props.dispatch);




    return (
        <div>
            <h3>All stocks that are popular now</h3>
            {
                props.stocks.map((stock, id) => <div>
                    <div>
                        Name: {stock.name}
                    </div>
                    <div>
                        Amount: {stock.amount}
                    </div>
                    <div onClick={ () => {
                        props.dispatch({type: "TOGGLE_FAVORITE", payload: {
                            id: id,
                            favorite: !stock.favorite
                        }})
                    }}>
                        Dispalay: {stock.favorite ? "Yes" : "No"}
                    </div>
                    <hr/>
                </div>)
            }
        </div>
    )
}