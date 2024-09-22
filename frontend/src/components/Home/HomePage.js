import { useCallback, useEffect, useState } from "react";
import { useStocksContext } from "../../hooks/useStocksContext";
import { IncomeForm } from "../Forms/IncomesForm";
import { StocksContainer } from "./StocksContainer";
import Navbar from "./NavBar";
import { AllStocksVisualizer } from "./AllStocksVisualizer";
import { RecommendationsVisualizer } from "./RecommendationsVisualizer";
import StockTrend from "../Graphs/StockTendGraph";
import { fetchStocks } from "../../functionalities/fetchWithIncome";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Home.css"


export const HomePage = () => {
    const [isActive1, setIsActive1] = useState(false);
    const { user } = useAuthContext();
    const { stocks, aiRecommend, dispatch } = useStocksContext();
    const [savings, setSavings] = useState(0);
    const [aiRecommend1, setAiRecommend] = useState(null);
    const [stocks1, setStocks] = useState(null);

    useEffect(() => {
        if (user) {
            fetchStocks(savings, setStocks, setAiRecommend, user.token);
        }
    }, [user,savings]);

    useEffect(() => {
        console.log(aiRecommend1);
        console.log(stocks1);
        if (savings > 100) {
            dispatch({ type: "SET_RECCOMENDATIONS", payload: aiRecommend1 });
            dispatch({ type: "SET_STOCKS", payload: stocks1 });

        }
    }, [stocks1, aiRecommend1, user]);



    return (
        <div className="homeWrapper">
            <Navbar />
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
                {(isActive1 && stocks)? <AllStocksVisualizer stocks={stocks.filter((stocks) => stocks.amount!=0)} dispatch={dispatch} /> : null}
                <hr />
                {aiRecommend && <RecommendationsVisualizer aiRecommend={aiRecommend} />}
            </div>
        </div>
    );
};