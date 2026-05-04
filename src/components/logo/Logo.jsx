import React from 'react'
import logo from "/logo.png"

export const Logo = ({ light = false }) => {
  return (
    <img 
      className={`w-20 lg:w-32 opacity-100 block transition-all duration-300 ${light ? 'brightness-0 invert' : 'brightness-0'}`} 
      src={logo} 
      alt="Kaz Properties" 
    />
  )
}
