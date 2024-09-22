import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          user: action.payload,
        };
      case "LOGOUT":
        return {
          user: null,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    //stored in json so its a json string
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
