import { useEffect, useState } from "react";
import { useStocksContext } from "../../hooks/useStocksContext"
import { IncomeForm } from "../Forms/IncomesForm";
import { StocksContainer } from "./StocksContainer";
import axios from "axios";
import { AllStocksVisualizer } from "./AllStocksVisualizer"
import { FavoriteStocksVisualizer } from "./FavoriteStocksVisualizer";

export const HomePage = () => {

    const {stocks, dispatch} = useStocksContext();
    const [savings, setSavings] = useState(0);

    return (
        <div className="homeWrapper">
            <div>
                Your savings: {savings && savings};
                <IncomeForm setSavings={setSavings}/>
                <StocksContainer/>
                <AllStocksVisualizer stocks = {stocks} dispatch={dispatch}/>
                <div></div>
                <div></div>
                <FavoriteStocksVisualizer stocks={stocks}/>
                <hr/>
            </div>
        </div>
    ) 
}
