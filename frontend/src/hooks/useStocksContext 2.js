import { useContext } from "react"
import { StocksContext } from "../context/stocksContext"

export const useStocksContext = () => {
    const context = useContext(StocksContext);

    return context
}