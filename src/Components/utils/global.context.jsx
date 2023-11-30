import { createContext, useReducer } from "react";
import { actionTypes } from "./actionTypes";

export const initialState = { theme: "dark", data: [], loading: true, error: null, id: null, detail: {} }

export const ContextGlobal = createContext(undefined);



const reducer = (state, action) => {

  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return { ...state, theme: action.payload }
    case actionTypes.FETCH_START:
      return { ...state, loading: true }
    case actionTypes.FETCH_ERROR:
      return { ...state, error: action.payload, loading: false }
    case actionTypes.GET_DATA:
      return { ...state, data: action.payload, error: null, loading: false }
    case actionTypes.GET_DETAILS:
      return { ...state, detail: action.payload, error: null, loading: false }
    case actionTypes.IS_FAVORITE:
      return { ...state, id: action.payload }
    case actionTypes.ADD_FAVORITE:
      localStorage.setItem('favorites', JSON.stringify(action.payload));
      return { ...state, id: action.id }
    case actionTypes.REMOVE_FAVORITE:
      localStorage.setItem('favorites', JSON.stringify(action.payload));
      return { ...state, id: action.id }
    default: return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, action] = useReducer(reducer, initialState);

  const getData = async () => {
    try {
      action({ type: actionTypes.FETCH_START })
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await response.json();
      action({ type: actionTypes.GET_DATA, payload: data })
    } catch (error) {
      action({ type: actionTypes.FETCH_ERROR, payload: error });
    }

  }

  const getDetails = async (id) => {
    try {
      action({ type: actionTypes.FETCH_START })
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      action({ type: actionTypes.GET_DETAILS, payload: data })
    } catch (error) {
      action({ type: actionTypes.FETCH_ERROR, payload: error });
    }

  }

  const ChangeTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';

    action({ type: actionTypes.CHANGE_THEME, payload: newTheme })
  }

  const contextValue = { state, ChangeTheme, getData, action, getDetails };

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
