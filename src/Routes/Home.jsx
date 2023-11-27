
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import React, { useContext, useEffect, useMemo }  from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state, getData} = useContext(ContextGlobal)
  useEffect(()=>{getData()},[]);
  
  const memoIzedData = useMemo(()=>state.data, [state.data]);

  if(state.loading){
    return <div>Cargando...</div>
  }

  if(state.error){
    return <div>Error: {state.error}</div>
  }

  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {memoIzedData.map((item)=>( <Card key={item.id} name={item.name} username={item.username} id={item.id}/>))}
       
      </div>
    </main>
  )
}

export default Home