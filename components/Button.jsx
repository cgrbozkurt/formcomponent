// Button.jsx
import React from 'react';

const Button = ({ children, bg, id, setTableData, tableData, action, setUserForm,setDisplayedTableData,updateDisplayedTableData }) => {
  const buttonHandler = () => {
    if (action === "delete") {
      const selectedIds = [id]; // Silinecek öğenin benzersiz tanımlayıcısı id ise
      const newData = tableData.filter(item => !selectedIds.includes(item.id));
      setTableData(newData)
           setDisplayedTableData();
           updateDisplayedTableData()

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
