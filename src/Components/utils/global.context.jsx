import { createContext, useReducer } from "react";

export const initialState = {theme: "dark", data: []}

export const ContextGlobal = createContext(undefined);

const reducer = (state, action)=>{
  
  switch (action.type) {
    case "ChangeTheme":
      return {...state, theme: action.payload}
      
    default: return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, action] = useReducer(reducer, initialState);
  
  const ChangeTheme = () =>{
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    
    action({type: 'ChangeTheme', payload:newTheme})
  }

  const contextValue = {state, ChangeTheme};

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
