import { createContext, useEffect, useReducer } from "react";

export const initialState = {theme: "dark", data: [], loading: false, error: null}

export const ContextGlobal = createContext(undefined);

const reducer = (state, action)=>{
  
  switch (action.type) {
    case "ChangeTheme":
      return {...state, theme: action.payload}
    case "FetchStart":
      return {...state, loading: true} 
    case "FetchError":
      return {...state, error: action.payload, loading: false}
    case "getData":
      return {...state, data: action.payload, error: null, loading: false}  
    default: return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, action] = useReducer(reducer, initialState);

  const getData = async () => {
    try {
      action({type: "FetchStart"})
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    action({type: getData, payload: data})
    } catch (error) {
      action({type: "FetchError", payload: error});
    }
    
  }

  const ChangeTheme = () =>{
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    
    action({type: 'ChangeTheme', payload:newTheme})
  }

  const contextValue = {state, ChangeTheme, getData};

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
