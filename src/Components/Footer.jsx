import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'


const Footer = () => {
  const {state} = useContext(ContextGlobal)
  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />

        <div className='redes-sociales'>
          <img src="/images/ico-facebook.png" alt="logo-facebook" width={25} height={25}/>
          <img src="/images/ico-instagram.png" alt="logo-instagram" width={25} height={25} />
          <img src="/images/ico-tiktok.png" alt="logo-tiktok" width={25} height={25}/>
          <img src="/images/ico-whatsapp.png" alt="logo-whatsapp" width={25} height={25} />
        </div>
    </footer>
  )
}

export default Footer
