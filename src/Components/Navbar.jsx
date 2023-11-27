import React, { useContext } from 'react'
import {ContextGlobal} from './utils/global.context'
import { Link } from 'react-router-dom'
import "./Navbar.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, ChangeTheme} = useContext(ContextGlobal)
  
  return (
    <nav className={`navbar ${state.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="navbar-logo">
        <img src="/images/logo.jpeg" alt="Logo" />
      </div>
      <div className="navbar-items">
        <ul>
          <li>
            <Link to="/home" className={`nav-link `}>Home</Link>
          </li>
          <li>
            <Link to="/favs" className={`nav-link `}>Favs</Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-link `}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="theme-toggle">
      <button onClick={(e)=>ChangeTheme()} className={state.theme}>Change theme</button>
      </div>
    </nav>
  );

 
}

export default Navbar