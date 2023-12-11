import React from "react";
import { tableHead } from "./thead";

import Image from "next/image";
import Button from "./Button";

const Table = () => {
  return (
    <div className="m-16">
      <table className="table-auto w-full     ">
        <thead className="bg-gray-300 w-full  ">
          <tr className=" ">
            <th className="py-5  text-center px-2 "> <input type="checkbox" /></th>
            {tableHead.map((thead, index) => (
              <th className="py-5  text-start" key={index}>{thead}</th>
              
            ))}
            <th className="w-[16%] py-5  text-start" ></th>
          </tr>
        </thead>
        <tbody className="w-full">
          {tableBody.map((bodyItem, index) => (
            <tr className="border-b-2  h-full  " key={index}>
              <td className="py-6  text-center   "> 
                <input type="checkbox" />
              </td>
              <td className="">
                <div className="flex gap-2">
                  <Image
                    width={43}
                    height={33}
                    className="rounded-full"
                    src={bodyItem.img}
                    alt={bodyItem.name}
                  />
                  <div>
                    <h1 className="">{bodyItem.name}</h1>
                    <span>{bodyItem.email}</span>
                  </div>
                </div>
              </td>
              <td>{bodyItem.position}</td>
              <td>{bodyItem.country}</td>
              <td>{bodyItem.status}</td>
              <td className="w-[12%]">
                <Button index={index} bg={"bg-blue-600"} >Edit user</Button>
                <Button bg={"bg-red-600"}>Delete user</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

let tableBody=[
    {
        img:"/images/neil-sims.png",
        name:"ahmet",
        email:"neil.sims@windster.com",
        position:"Front-end developer",
        country:"United States",
        status:"active"
    },
    {
        img:"/images/neil-sims.png",
        name:"asdfs",
        email:"asdf@windster.com",
        position:"Fdsfat-end developer",
        country:"United States",
        status:"active"
    },
    {
        img:"/images/neil-sims.png",
        name:"Neil Sims",
        email:"neil.sims@windster.com",
        position:"Front-end developer",
        country:"United States",
        status:"active"
    },
    {
        img:"/images/neil-sims.png",
        name:"Neil Sims",
        email:"neil.sims@windster.com",
        position:"Front-end developer",
        country:"United States",
        status:"active"
    },
    {
        img:"/images/neil-sims.png",
        name:"Neil Sims",
        email:"neil.sims@windster.com",
        position:"Front-end developer",
        country:"United States",
        status:"active"
    },
    {
        img:"/images/neil-sims.png",
        name:"Neil Sims",
        email:"neil.sims@windster.com",
        position:"Front-end developer",
        country:"United States",
        status:"active"
    },
    {
        img:"/images/neil-sims.png",
        name:"Neil Sims",
        email:"neil.sims@windster.com",
        position:"Front-end developer",
        country:"United States",
        status:"active"
    },
    {
        img:"/images/neil-sims.png",
        name:"Neil Sims",
        email:"neil.sims@windster.com",
        position:"Front-end developer",
        country:"United States",
        status:"active"
    },
    {
        img:"/images/neil-sims.png",
        name:"Neil Sims",
        email:"neil.sims@windster.com",
        position:"Front-end developer",
        country:"United States",
        status:"active"
    },
]



export default Table;
