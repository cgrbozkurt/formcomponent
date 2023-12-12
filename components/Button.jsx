import React from 'react'
import { tableBody } from './tbody'



const Button = ({children,bg,index ,setTable,table }) => {
  const buttonHandler=()=>{
    const updatedTable = [...table];
    updatedTable.splice(index, 1);
    setTable(updatedTable);
  }
  return (
    <button onClick={buttonHandler}  className={`${bg} rounded-xl px-2 py-1 text-white`}> 
{children}
    </button>
  )
}

export default Button