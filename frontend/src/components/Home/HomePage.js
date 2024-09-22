import { useEffect, useState } from "react";
import { useStocksContext } from "../../hooks/useStocksContext";
import { IncomeForm } from "../Forms/IncomesForm";
import { StocksContainer } from "./StocksContainer";
import Navbar from "./NavBar";
import { AllStocksVisualizer } from "./AllStocksVisualizer";
import { FavoriteStocksVisualizer } from "./FavoriteStocksVisualizer";
import StockTrend from "../Graphs/StockTendGraph";
import { fetchStocks } from "../../functionalities/fetchWithIncome";
import { useAuthContext } from "../../hooks/useAuthContext";

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
    if (stocks1) {
      console.log("Updated stocks1:", stocks1);
    }
    if (aiRecommend) {
      console.log("Updated aiRecommend:", aiRecommend);
    }
  }, [stocks1, aiRecommend]);

  return (
    <div className="homeWrapper">
      <Navbar />
      <div>
        Your savings: {savings && savings};
        <IncomeForm setSavings={setSavings} />
        <StocksContainer />
        <AllStocksVisualizer stocks={stocks} dispatch={dispatch} />
        <div></div>
        <div></div>
        <FavoriteStocksVisualizer stocks={stocks} />
        <hr />
      </div>
      <div>
        {stocks1 &&
          stocks1.map((stock) => <StockTrend stock={stock} key={stock.o} />)}
      </div>
    </div>
  );
};
