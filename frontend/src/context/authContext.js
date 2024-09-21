import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const authReducer = (state, action) => {
        switch (action.type) {
            case "LOGIN" :
                return {
                    user: action.payload,
                };
            case "LOGOUT" : 
                return {
                    user: null
                };
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    useEffect(() => {

    }, [])
    
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}