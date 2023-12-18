// Button.jsx
import React from 'react';

const Button = ({ children, bg, id, setTableData, tableData, action, setUserForm,setConfirm,handleDeleteSelected}) => {
  const buttonHandler = () => {
    if (action === "delete") {
      
      setConfirm(true)

    } else if (action === "edit") {
      setUserForm(true);
    } else if (action === "add") {
      setUserForm(true);
    }
    else if(action==="hayır"){
      setConfirm(false)
    }
    else if(action==="evet"){
      handleDeleteSelected()
      setConfirm(false)
    }
  };

  return (
    <button onClick={buttonHandler} className={`${bg} rounded-md px-2 py-1 text-white`}>
      {children}
    </button>
  );
};

export default Button;
