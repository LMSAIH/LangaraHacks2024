const openai = require("../config/openaiConfig");

const generateMeta = async (req, res) => {
  const stocks = req.body.message.stocks;
  const stockPrices = req.body.message.stockPrices;
  const income = req.body.income;
  const description = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: `You are a professional financial advisor. I have ${income} dollars. I have the following choices to make and their prices in dollars. 
        Keep in mind they are ordered, you will receive a string of stocks separated by a blank space, and afterwards, their price separated also by a blank space,
        if, for instance you receive AAPL TSLA and then 100 349, that means AAPL costs 100 per stock and TSLA costs 349. 
        According to my budget, answer only with the stocks that I can afford in the same format I write them. The stocks are: ${stocks}, the prices are: ${stockPrices}. Dont explain your reasoning 
        and just send me the stocks you choose, followed by the amount of shares I should buy. Nothing but the amount of share should follow the stocknames,
        the amount multiplied by the price per stock should never exceed the total income, all the stocks summed must be below the income. 
        Only choose the ones you think have the best value best on their general reputation`,
      },
    ],
    max_tokens: 100,
  });

  res.status(200).json({
    aibot: description.choices[0].message.content,
  });
};

module.exports = { generateMeta };
