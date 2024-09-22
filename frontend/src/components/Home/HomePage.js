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
            <div className = "homeContent">
                <h1> Your stock <span className = "dashboard">Dashboard</span>. </h1>
                <IncomeForm setSavings={setSavings} />
                <div className = "suggestions">
                    <h3>Our suggested stocks </h3>
                    <div><button onClick={() => {
                        setIsActive1(!isActive1);
                    }}>{isActive1 ? "Hide" : "Show"}</button></div>
                </div>
                {isActive1 ? <AllStocksVisualizer stocks={stocks.filter((stocks) => stocks.amount!=0)} dispatch={dispatch} /> : null}
                {aiRecommend && <RecommendationsVisualizer aiRecommend={aiRecommend} />}
            </div>
        </div>
    );
};