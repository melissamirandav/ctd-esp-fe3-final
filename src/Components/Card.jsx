import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

const actionTypes = {
  IS_FAVORITE: 'IS_FAVORITE',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
};

const initialState = {isFavorite: false}

const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.IS_FAVORITE: 
      return {...state, isFavorite: action.payload}
    case actionTypes.ADD_FAVORITE:
      localStorage.setItem('favorites', JSON.stringify(action.payload));
      return {...state, isFavorite:true}
    case actionTypes.REMOVE_FAVORITE:
      localStorage.setItem('favorites', JSON.stringify(action.payload));
      return {...state, isFavorite:false}
    default: return state
  }
}

const Card = ({ name, username, id }) => {
const [state, action] = useReducer(reducer, initialState);


  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    action({type: actionTypes.IS_FAVORITE, payload:favorites.some((item) => item.id === id) })

  }, [id]);

  const addFav = () =>{
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const newFavorite = { id, name, username };
    favorites.push(newFavorite);
    action({type: actionTypes.ADD_FAVORITE, payload:favorites})
  }

  const removeFav = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const existingIndex = favorites.findIndex((item) => item.id === id);

    if (existingIndex != -1) {
      favorites.splice(existingIndex, 1);
      action({type: actionTypes.REMOVE_FAVORITE, payload:favorites })
    }
  };

  
  return (
    <div className="card">
      <div>
        <h2>ID: {id}</h2>
        <h3>{name}</h3>
        <p>@{username}</p>
      </div>
      <div>
      {state.isFavorite ? (
          <button onClick={removeFav}>Quitar de Favoritos</button>
        ) : (
          <button onClick={addFav}>Agregar a Favoritos</button>
        )}
        <Link to={`/dentist/${id}`}>Detalles</Link>
      </div>
    </div>
  );
};


export default Card;
