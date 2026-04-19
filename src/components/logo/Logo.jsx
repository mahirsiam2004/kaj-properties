import React from 'react'
import logo from "/logo.png"

export const Logo = ({ light = false }) => {
  return (
    <img 
      className={`w-24 lg:w-32 opacity-100 block transition-all duration-300 filter grayscale brightness-0 ${light ? 'invert' : ''}`} 
      src={logo} 
      alt="Kaz Properties" 
    />
  )
}
