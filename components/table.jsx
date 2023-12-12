import React, { useState } from "react";
import { tableHead } from "./thead";
import { tableBody } from "./tbody";
import Image from "next/image";
import Button from "./Button";

const Table = () => {
  const [tableData, setTableData] = useState([
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
    },]);
  console.log(tableData);
  return (
    <div className="m-16">
      <table className="table-auto w-full     ">
        <thead className="bg-gray-300 w-full  ">
          <tr className=" ">
            <th className="py-5  text-center px-2 ">
              {" "}
              <input type="checkbox" />
            </th>
            {tableHead.map((thead, index) => (
              <th className="py-5  text-start" key={index}>
                {thead}
              </th>
            ))}
            <th className="w-[16%] py-5  text-start"></th>
          </tr>
        </thead>
        <tbody className="w-full">
          {tableData.map((table, index) => (
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
                    src={table.img}
                    alt={table.name}
                  />
                  <div>
                    <h1 className="">{table.name}</h1>
                    <span>{table.email}</span>
                  </div>
                </div>
              </td>
              <td>{table.position}</td>
              <td>{table.country}</td>
              <td>{table.status}</td>
              <td className="w-[12%]">
                <Button index={index} table={tableData} setTable={setTableData} bg={"bg-blue-600"}>
                  Edit user
                </Button>
                <Button bg={"bg-red-600"} table={tableData} setTable={setTableData}>
                  Delete user
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
