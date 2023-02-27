import React from 'react'
import logo from '../images/Hard_hat_logo.jpg'
import './Logo.css'

function Logo({size}) {
  const height = `${size*100}px`

  return (
    <div className='logo-container'>
        <h1 id='app-title' style={{fontSize:`${size*2.5}rem`, padding:`${size*10}px`}}>
          Hard Hat<br/>Manager
        </h1>
        <img id='logo' src={logo} alt='hard_hat_logo' style={{height: (height)}}/>
    </div>
  )
}

export default Logo;