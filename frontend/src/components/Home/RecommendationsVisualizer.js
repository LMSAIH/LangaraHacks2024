export const RecommendationsVisualizer = (props) => {
  console.log(props.aiRecommend);

  return (
    <div className="recommendedStocks">
      <h3>Wishlist</h3>
      <div className = "rStocks">
      {props.aiRecommend.map((r, id) => {
        if (r.favorite) {
          return (
            <div className = "infoContainer">
              <div className = "name"> {r.name}</div>
              <div className = "amount">Recommended shares: {r.amount}</div>
            </div>
          );
        } else {
          return;
        }
      })}
      </div>
    </div>
  );
};
