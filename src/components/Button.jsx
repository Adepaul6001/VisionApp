import React from 'react'


const Button = ({children, variant= "primary" , size= "md" }) => {
  return (
    <button className={`button ${variant} ${size}`}>
          {children}
    </button>
      
  )
}

export default Button;
