import { useCallback, useEffect, useState } from "react";
import { useStocksContext } from "../../hooks/useStocksContext";
import { IncomeForm } from "../Forms/IncomesForm";
import { StocksContainer } from "./StocksContainer";
import axios from "axios";
import { AllStocksVisualizer } from "./AllStocksVisualizer";
import { RecommendationsVisualizer } from "./RecommendationsVisualizer";
import StockTrend from "../Graphs/StockTendGraph";
import { fetchStocks } from "../../functionalities/fetchWithIncome";
import "./Home.css"


export const HomePage = () => {

    const [isActive1, setIsActive1] = useState(false);

    const { stocks, aiRecommend, dispatch } = useStocksContext();
    const [savings, setSavings] = useState(0);
    const [aiRecommend1, setAiRecommend] = useState(null);
    const [stocks1, setStocks] = useState(null);

    const setStocksWithCallback = useCallback(setStocks, [stocks1]);
    const setAiRecommendWithCallback = useCallback(setAiRecommend, [aiRecommend1]);


    useEffect(() => {
        if (savings < 100) {
            setStocks(null);
            setAiRecommend(null);
        } else {
            fetchStocks(savings, setStocks, setAiRecommend).then(() => {
            });
        }
    }, [savings]);

    useEffect(() => {
        console.log(aiRecommend1);
        console.log(stocks1);

        if (savings > 100) {
            dispatch({ type: "SET_RECCOMENDATIONS", payload: aiRecommend1 });

            dispatch({ type: "SET_STOCKS", payload: stocks1 });


            console.log("HERE")
            console.log(aiRecommend)

        }
    }, [stocks1, aiRecommend1]);



    return (
        <div className="homeWrapper">
            <div>
                Your savings: {savings && savings};
                <IncomeForm setSavings={setSavings} />
                <StocksContainer />
                <div>
                    <div>Our suggested stocks: </div>
                    <div><button onClick={() => {
                        setIsActive1(!isActive1);
                    }}>Show stocks</button></div>
                </div>
                {isActive1 ? <AllStocksVisualizer stocks={stocks} dispatch={dispatch} /> : null}
                <hr />
                {aiRecommend && <RecommendationsVisualizer aiRecommend={aiRecommend} />}
            </div>
            <div>
                {stocks1 &&
                    stocks1.map((stock) => <StockTrend stock={stock} key={stock.o} />)}
            </div>
        </div>
    );
};
