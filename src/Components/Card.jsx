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

const Card = ({ name, username, id, show }) => {
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
        <img src="/images/doctor.jpg" width={250} height={190}/>
      </div>
      <div>
        <h3>{name}</h3>
        <p>@{username}</p>
      </div>
      <div className='iconos'>
      {state.isFavorite ? (
          <img onClick={removeFav} src='/images/removefav.jpg' width={30} alt='remover-favorito'/>
        ) : ( show?
          <img onClick={addFav} src='/images/agregarfav.png' width={30} alt='agregar-favorito'/>:null
        )}
        <Link to={`/dentist/${id}`} margin={0}>
          <img src="/images/detalle.png" width={30} alt='detalle-dentista'/>
        </Link>
      </div>
    </div>
  );
};


export default Card;
