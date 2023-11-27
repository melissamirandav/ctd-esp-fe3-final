
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import React, { useContext }  from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContext(ContextGlobal)
  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home