import { createContext, useEffect, useReducer } from "react";

export const StocksContext = createContext();

export const StocksContextProvider = (props) => {
    const stocksReducer = (state, action) => {
        switch (action.type) {
            case "TOGGLE_FAVORITE": 
            
            return {
                ...state,
                stocks: state.stocks.map((s, i) => {
                    if (i == action.payload.id) {
                        return {
                            name: s.name,
                            amount: s.amount,
                            favorite: action.payload.favorite
                        }
                    
                    } else return s
                }),
            };
            default: 
                return state;
        }
    } 

    const [state, dispatch] = useReducer(stocksReducer, {
        stocks: [ {
            name: "Apple",
            amount: 100,
            favorite: false
        },
        {
            name: "Samsung",
            amount: 200,
            favorite: false
        },
        {
            name: "Lenovo",
            amount: 300,
            favorite: false
        },
        {
            name: "Huawei",
            amount: 400,
            favorite: true
        },
    ]
    })

    useEffect(()=>{

    }, [])

    return (
        <StocksContext.Provider value = {{...state, dispatch}}>
            {props.children}
        </StocksContext.Provider>
    )

}
 