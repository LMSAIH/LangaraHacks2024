import { createContext, useEffect, useReducer } from "react";

export const StocksContext = createContext();

export const StocksContextProvider = (props) => {
    const stocksReducer = (state, action) => {
        switch (action.type) {
            case "SET_STOCKS":
                return {
                    ...state,
                    stocks: action.payload.map(s => {
                        return {
                            name: s.T,
                            volume: s.v,
                            price: s.o,
                            max: s.h,
                            min: s.l,
                            open: s.o,
                            close: s.c,
                            favorite: false
                        }
                    })
                }
            case "TOGGLE_FAVORITE":
                return {
                    ...state,
                    aiRecommend: state.aiRecommend.map((r, i) => {
                        if (i == action.payload.id) {
                            return {
                                name: r.name,
                                amount: r.amount,
                                favorite: action.payload.favorite
                            }
                        } else return r;
                    }),
                    stocks: state.stocks.map((s, i) => {
                        if (i == action.payload.id) {
                            return {
                                name: s.name,
                                volume: s.vokume,
                                price: s.price,
                                max: s.max,
                                min: s.min,
                                favorite: action.payload.favorite
                            }
                        } else return s;
                    }),
                };
            case "SET_RECCOMENDATIONS" :
                debugger
                return {
                    ...state,
                    aiRecommend: action.payload.map(r => {
                        return {
                            name: r.name,
                            amount: r.amount,
                            favorite: false
                        }
                    })
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(stocksReducer, {
        stocks: [{
            name: "APPL",
            volume: 100,
            price: 101,
            max: 102,
            min: 99,
            avorite: false
        },
        {
            name: "SAMS",
            volume: 200,
            price: 201,
            max: 202,
            min: 199,
            avorite: false
        },
        {
            name: "NVID",
            volume: 300,
            price: 301,
            max: 302,
            min: 299,
            avorite: false
        },
        ],
        aiRecommend: [
            {
                name: "Apple",
                amount: 3,
                favorite: false
            },
            {
                name: "Nvidia",
                amount: 11,
                favorite: false
            }
        ]
    })

    useEffect(() => {

    }, [])

    return (
        <StocksContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </StocksContext.Provider>
    )

}
