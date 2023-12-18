// Deleteconfirmation.jsx

import React, { useState } from 'react';
import Button from './Button';

const Deleteconfirmation = ({ confirm, setConfirm, handleDeleteSelected, setTableData, tableData, id }) => {
  const [confirmationAction, setConfirmationAction] = useState(null);

  const handleDelete = () => {
    if (confirmationAction === "deletelist") {
      handleDeleteSelected();
      setConfirm(false);
    } else if (confirmationAction === "deleteselected") {
      const updatedTableData = tableData.filter((item) => item.id !== id);
      setTableData(updatedTableData);
      setConfirm(false);
      console.log("çalıştı");
    }
  };

  return (
    <>
      {confirm && (
        <div className='absolute w-[25%] h-[25%] left-[37.5%] top-[25%] bg-white border-2 flex flex-col justify-around '>
          <p className='text-center mt-5'>Silmek İstediğinizden Emin misiniz ?</p>
          <button
            onClick={() => setConfirm(false)}
            className='absolute right-2 top-2 rounded-full border-2 w-7 h-7 text-center transition-all duration-300
         items-center hover:bg-white hover:text-red-600 flex justify-center bg-red-600 text-white'
          >
            <svg
              className='w-5 h-5 cursor-pointer '
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              ></path>
            </svg>
          </button>
          <div className='relative w-full h-full flex justify-around items-center'>
            <button onClick={handleDelete} className='bg-addcolor text-white py-1 hover:opacity-80 w-[25%] rounded-lg'>
              Evet
            </button>
            <Button
              action='hayir'
              setConfirm={setConfirm}
              bg={'bg-white text-addcolor border-2 border-addcolor hover:opacity-80 font-semibold  w-[25%]  '}
            >
              Hayır
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Deleteconfirmation;
