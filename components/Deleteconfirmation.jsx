import React from 'react';
import Button from './Button';

const Deleteconfirmation = ({ confirm, setConfirm, handleDeleteSelected,setTableData,tableData,id,deleteID,setDeleteId }) => {

const handleDelete=()=>{
  if(deleteID===true){
    console.log("çalıştı")
setDeleteId(false);
   
  }
  else {
   
    handleDeleteSelected()
    setConfirm(false)
    console.log("dts")
  }
}

  return (
    <>
      {confirm && (
        <div className='absolute w-[25%] h-[25%] left-[37.5%] top-[25%] rounded-xl p-2 border-2 border-addcolor bg-white  flex flex-col justify-around '>
          <p className='text-center mt-5 text-addcolor font-semibold'>Silmek İstediğinizden Emin misiniz ?</p>
          <button
            onClick={() => setConfirm(false)}
            className='absolute right-2 top-2 rounded-full border-2 w-7 h-7 text-center transition-all duration-300
         items-center hover:bg-addcolor hover:text-white flex justify-center bg-white text-addcolor'
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
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div className='relative w-full h-full flex justify-around items-center'>
            <button onClick={handleDelete} className='bg-addcolor text-white py-1 hover:opacity-90 w-[25%] rounded-lg'>
              Evet
            </button>
            <Button action='hayir' setConfirm={setConfirm} 
            bg={'bg-white !text-addcolor border-2 border-addcolor hover:opacity-90 font-semibold  w-[25%]  '}>
              Hayır
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Deleteconfirmation;
