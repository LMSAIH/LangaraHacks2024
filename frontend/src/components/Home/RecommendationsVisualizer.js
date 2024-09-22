export const RecommendationsVisualizer = (props) => {

    console.log(props.aiRecommend)
    

    return (
        <div>
            <h3>Our ai reccomends to invest money in following ways:</h3>
            {props.aiRecommend.map((r, id) => {
                if (r.favorite) {
                    return (
                        <div>
                        <div>
                            Name: {r.name}
                        </div>
                        <div>
                            Amount: {r.amount}
                        </div>
                        <hr/>
                    </div>
                    )
                } else {
                    return
                }
               })}
        </div>
    )
}