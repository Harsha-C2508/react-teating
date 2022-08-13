import React from 'react'

const Button1 = ({children,inc}) => {
  return (
    <button 
    data-testid="increButton"
    onClick={inc}>
        {children}
    </button>
  )
}

export default Button1