import React, { useContext } from 'react'
import {ContextGlobal} from './utils/global.context'
import {  NavLink } from 'react-router-dom'
import "./Navbar.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, ChangeTheme} = useContext(ContextGlobal)
  
  return (
    <nav className={state.theme}>
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo" width={70}/>
      </div>
      <div className="menu">
        
            <NavLink to="/home" className={`nav-link `}>Home</NavLink>
          
            <NavLink to="/favs" className={`nav-link `}>Favs</NavLink>
         
            <NavLink to="/contact" className={`nav-link `}>Contact</NavLink>
        
      </div>
      <div className="theme-toggle">
      <button onClick={(e)=>ChangeTheme()} className='theme-button'> 

        <img width={40} src={state.theme === 'dark' ? '/images/sol.png' : '/images/luna.png'} alt='cambiar-tema' />
      
      </button>
      </div>
    </nav>
  );

 
}

export default Navbar