import React from 'react'

const Button2 = ({children,dec}) => {
  return (
  <button 
  data-testid="reduceButton"
  onClick={dec}
  >
    {children}
  </button>
  )
}

export default Button2