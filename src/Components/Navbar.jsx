import React, { useContext } from 'react'
import {ContextGlobal} from './utils/global.context'
import { Link } from 'react-router-dom'
import "./Navbar.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, ChangeTheme} = useContext(ContextGlobal)
  
  return (
    <nav className={state.theme}>
      <div className="navbar-logo">
        <img src="/images/logo.jpeg" alt="Logo" />
      </div>
      <div className="menu">
        
            <Link to="/home" className={`nav-link `}>Home</Link>
          
            <Link to="/favs" className={`nav-link `}>Favs</Link>
         
            <Link to="/contact" className={`nav-link `}>Contact</Link>
        
      </div>
      <div className="theme-toggle">
      <button onClick={(e)=>ChangeTheme()} className='theme-button'> 

        <img width={40} src={state.theme == 'dark' ? '/images/sol.png' : '/images/luna.png'} />
      
      </button>
      </div>
    </nav>
  );

 
}

export default Navbar