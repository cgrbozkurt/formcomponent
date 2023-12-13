import React from 'react';
import { tableBody } from './tbody';
import NewUserForm from './UserForm';

const Button = ({ children, bg, index, setTable, table, action, addItem }) => {
  const buttonHandler = () => {
    if (action === "delete") {
      const updatedTable = [...table];
      updatedTable.splice(index, 1);
      setTable(updatedTable);
    } else if (action === "edit") {
      addItem();
      
    }
  };

  return (
    <button onClick={buttonHandler} className={`${bg} rounded-xl px-2 py-1 text-white`}>
      {children}
    </button>
  );
};

export default Button;
