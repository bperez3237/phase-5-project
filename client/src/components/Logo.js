import React from 'react'
import logo from '../images/Hard_hat_logo.jpg'

function Logo() {
  return (
    <div className='logo-container'>
        <h1 id='app-title'>Hard Hat<br/>Manager</h1>
        <img id='logo' src={logo} alt='hard_hat_logo'/>
    </div>
  )
}

export default Logo;