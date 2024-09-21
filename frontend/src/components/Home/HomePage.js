import { useEffect, useState } from "react";
import { useStocksContext } from "../../hooks/useStocksContext"
import { IncomeForm } from "../Forms/IncomesForm";
import { StocksContainer } from "./StocksContainer";

export const HomePage = () => {

    const {stocks, dispatch} = useStocksContext();
    const [savings, setSavings] = useState(0);

    useEffect(() => {

    }, [])

    return (
        <div className="homeWrapper">
            <h2>{stocks && stocks}</h2>
            <div>
                Your savings: {savings && savings};
                <IncomeForm setSavings={setSavings}/>
                <StocksContainer/>
            </div>
        </div>
    ) 
}