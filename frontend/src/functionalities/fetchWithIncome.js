import axios from "axios";

export const fetchStocks = async (income, setStocks, setAiRecommend, token) => {
  const date = new Date(Date.now()).toISOString().split("T")[0];
  const finalten = [];
  let finalStocks = [];
  await axios
    .get(
      `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-09-21?adjusted=true&apiKey=xh41fiVsvvdpv14Ef1zbZerGM75xM5X1`
    )
    .then((unsortedStocks) => {
      let chosenStocks = [];
      unsortedStocks.data.results.map((stock) => {
        if (stock.v >= 10000000) {
          chosenStocks.push(stock);
        }
      });

      while (finalten.length < 10) {
        let max = chosenStocks[0].v;
        let maxStock = chosenStocks[0];
        let maxIndex = 0;

        for (let i = 0; i < chosenStocks.length; i++) {
          if (chosenStocks[i].v >= max) {
            max = chosenStocks[i].v;
            maxStock = chosenStocks[i];
            maxIndex = i;
          }
        }

        finalten.push(maxStock);
        chosenStocks.splice(maxIndex, 1);
      }

      finalStocks = finalten;
    })
    .catch((err) => {
      console.log(err);
    });

  const createStocks = () => {
    let res = "";
    for (let i = 0; i < finalten.length; i++) {
      res += finalten[i].T + " ";
    }

    return res;
  };

  const createStocksPrices = () => {
    let res = "";
    for (let i = 0; i < finalten.length; i++) {
      res += finalten[i].o + " ";
    }

    return res;
  };

  const stocksString = createStocks();
  const stockPricesString = createStocksPrices();


  const requestBody = {
    message: {
      stocks: stocksString,
      stockPrices: stockPricesString,
    },
    income: income,
  };

  await axios
    .post(
      "http://localhost:4000/api/aiprompt",
      requestBody, // This is the request body
      {
        headers: {
          Authorization: `Bearer ${token}`, // Headers should be passed as a separate argument
        },
      }
    )
    .then((response) => {
      const recommendedData = response.data.aibot;

      const parseStocks = (data) => {
        // Split by any whitespace (spaces, newlines, tabs, etc.)
        const stockArray = data.trim().split(/\s+/);
        const result = [];

        // Iterate through the array in pairs (name and amount)
        for (let i = 0; i < stockArray.length; i += 2) {
          const name = stockArray[i]; // Stock symbol
          result.push(name); // Only push the name (omit amount)
        }
        return result;
      };

      const parseStocksByIA = (data) => {
        const stockArray = data.trim().split(/\s+/);
        const result = [];

        // Iterate through the array in pairs (name and amount)
        for (let i = 0; i < stockArray.length; i += 2) {
          const name = stockArray[i]; // Stock symbol
          const amount = stockArray[i + 1]; // Convert price to float
          result.push({ name, amount });
        }

        return result;
      };

      const stockNames = parseStocks(recommendedData);
      const recommendedStocks = parseStocksByIA(recommendedData);
      finalStocks = finalStocks.filter((stock) => stockNames.includes(stock.T));

      setStocks(finalStocks);
      setAiRecommend(recommendedStocks);
    })
    .catch((err) => {
      console.log(err);
    });
};
