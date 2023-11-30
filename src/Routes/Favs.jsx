import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContext(ContextGlobal)
  
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  useEffect(() => {
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  }, [state.id]);


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
