import React from 'react';

const Button = ({ children, bg, id, setTableData, action, setUserForm,newTableData }) => {
  const buttonHandler = () => {
    if (action === "delete") {
      const newData = newTableData.filter(item => item.id !== id);
      setTableData(newData);
    } else if (action === "edit") {
      setUserForm(true);
    } else if (action === "add") {
      setUserForm(true);
    }
  };

  return (
    <button onClick={buttonHandler} className={`${bg} rounded-md px-2 py-1 text-white`}>
      {children}
    </button>
  );
};

export default Button;
