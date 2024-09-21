import { createContext, useEffect, useReducer } from "react";

export const StocksContext = createContext();

export const StocksContextProvider = (props) => {
    const stocksReducer = (state, action) => {
        switch (action.type) {
            default: 
                return state;
        }
    } 

    const [state, dispatch] = useReducer(stocksReducer, {
        stocks: "i am here"
    })

    useEffect(()=>{

    }, [])

    return (
        <StocksContext.Provider value = {{...state, dispatch}}>
            {props.children}
        </StocksContext.Provider>
    )

}
 