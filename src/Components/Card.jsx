import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import { actionTypes } from "./utils/actionTypes";


const Card = ({ name, username, id, show }) => {
  const { action } = useContext(ContextGlobal)
  const [isFavorite, setFavorite] = useState(false)


  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    action({ type: actionTypes.IS_FAVORITE, payload: id })
    setFavorite(favorites.some((item) => item.id === id))

  }, [id]);

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const newFavorite = { id, name, username };
    favorites.push(newFavorite);
    action({ type: actionTypes.ADD_FAVORITE, payload: favorites, id: id })
    setFavorite(true)

  }

  const removeFav = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const existingIndex = favorites.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      favorites.splice(existingIndex, 1);
      action({ type: actionTypes.REMOVE_FAVORITE, payload: favorites, id: id })
      setFavorite(false)
    }
  };


  return (
    <div className="card">
      <div>
        <img src="/images/doctor.jpg" width={250} height={190} alt='imagen-dentista' />
      </div>
      <div>
        <h3>{name}</h3>
        <p>@{username}</p>
      </div>
      <div className='iconos'>
        {isFavorite ? (
          <img onClick={removeFav} src='/images/removefav.png' width={30} alt='remover-favorito' />
        ) : (show ?
          <img onClick={addFav} src='/images/agregarfav.png' width={30} alt='agregar-favorito' /> : null
        )}
        <Link to={`/dentist/${id}`} margin={0}>
          <img src="/images/detalle.png" width={30} alt='detalle-dentista' />
        </Link>
      </div>
    </div>
  );
};


export default Card;
