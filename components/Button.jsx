import React from 'react';
import { tableBody } from './tbody';
import NewUserForm from './UserForm';
import UserForm from './UserForm';

const Button = ({ children, bg, index, setTableData, table, action ,setUserForm}) => {
  const buttonHandler = () => {
    if (action === "delete") {
      const updatedTable = [...table];
      updatedTable.splice(index, 1);
      setTableData(updatedTable);
      
    } else if (action === "edit") {
    setUserForm(true)
   
      
    }
  };

  return (
    <button onClick={buttonHandler} className={`${bg} rounded-md px-2 py-1  text-white`}>
      {children}
    </button>
  );
};

export default Button;
