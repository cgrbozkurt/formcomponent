import React from 'react'

const Button = ({children,bg}) => {
  return (
    <button  className={`${bg} rounded-xl px-2 py-1 text-white`}> 
{children}
    </button>
  )
}

export default Button