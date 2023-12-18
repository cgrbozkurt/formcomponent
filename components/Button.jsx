// Button.jsx
import React from 'react';

const Button = ({ children, bg,action, setUserForm,setConfirm}) => {
  const buttonHandler = () => {
    if (action === "delete") {
      
      setConfirm(true)

    } else if (action === "edit") {
      setUserForm(true);
    } else if (action === "add") {
      setUserForm(true);
    }
    else if(action==="hayir"){
      setConfirm(false)
    }
  
  };

  return (
    <button onClick={buttonHandler} className={`${bg} rounded-md px-2 py-1 hover:opacity-80   text-white`}>
      {children}
    </button>
  );
};

export default Button;
