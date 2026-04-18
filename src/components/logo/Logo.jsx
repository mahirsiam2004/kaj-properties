import React from 'react'
import logo from "/logo.png"

export const Logo = ({ light = false }) => {
  return (
    <div>
      <img 
        className={`w-28 lg:w-36 opacity-90 filter grayscale brightness-0 ${light ? 'invert' : ''}`} 
        src={logo} 
        alt="Kaz Properties" 
      />
    </div>
  )
}
