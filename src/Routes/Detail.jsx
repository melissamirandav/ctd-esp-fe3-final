import React, { useContext, useEffect } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import { useParams } from 'react-router-dom';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {id} = useParams();
  const {state, getDetails} = useContext(ContextGlobal)
  
  useEffect(()=>{ 
    getDetails(id);},[]);
   
  if(state.loading ){
    return <div>Cargando...</div>
  }

  if(state.error){
    return <div>Error: {state.error}</div>
  }
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className="user-details">
      <h1>{state.detail.name}</h1>
    <div className="user-info">
      <div> 
        <p>Username: {state.detail.username}</p>
        <p>Phone: {state.detail.phone}</p>
        <p>Website: {state.detail.website}</p>
      </div>
      <div className="user-image">
        <img src="/images/doctor.jpg" alt="imagen-doctor" />
      </div>
    </div>
    <div className="user-address">
      <h2>Address:</h2>
      <p>
        {state.detail.address.street}, {state.detail.address.suite}, {state.detail.address.city}, {state.detail.address.zipcode}
      </p>
    </div>
    <div className="user-company">
      <h2>Company:</h2>
      <p>Name: {state.detail.company.name}</p>
      <p>Catch Phrase: {state.detail.company.catchPhrase}</p>
      <p>BS: {state.detail.company.bs}</p>
    </div>
  </div>
  )
}

export default Detail