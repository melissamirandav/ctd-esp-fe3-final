import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContext(ContextGlobal)
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, [state.id]);

  if(favorites.length === 0){
    return <div>No tiene favoritos agregados...</div>
  }
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((item)=>( <Card key={item.id} show={false} name={item.name} username={item.username} id={item.id}/>))}
      
      </div>
    </>
  );
};

export default Favs;
