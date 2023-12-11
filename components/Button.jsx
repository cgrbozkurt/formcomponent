import React from 'react'
import { tableBody } from './tbody'

const newItem = {
    img: "/images/yeni-resim.png",
    name: "Yeni İsim",
    email: "yeni.isim@ornek.com",
    position: "Yeni Pozisyon",
    country: "Türkiye",
    status: "active"
  };

const Button = ({children,bg,index  }) => {
  return (
    <button onClick={()=>tableBody.splice(index,1)}  className={`${bg} rounded-xl px-2 py-1 text-white`}> 
{children}
    </button>
  )
}

export default Button