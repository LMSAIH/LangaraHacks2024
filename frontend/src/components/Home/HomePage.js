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
  const { user } = useAuthContext();
  const { stocks, dispatch } = useStocksContext();
  const [savings, setSavings] = useState(0);
  const [aiRecommend, setAiRecommend] = useState(null);
  const [stocks1, setStocks] = useState(null);

  useEffect(() => {
    if (user) {
        console.log(user);
        console.log(user.token);
      fetchStocks(800, setStocks, setAiRecommend, user.token);
    }
  }, [user]);

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
