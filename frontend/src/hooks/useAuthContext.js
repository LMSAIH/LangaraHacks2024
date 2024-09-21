import { useContext } from "react"
import { StocksContext } from "../context/stocksContext"

export const useAuthContext = () => {
    const context = useContext(StocksContext);

    return context;
}