import React from "react";
import { tableHead } from "./thead";
import { tableBody } from "./tbody";
import Image from "next/image";
import Button from "./Button";

const Table = () => {
  return (
    <div className="p-5">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {tableHead.map((thead, index) => (
              <th key={index}>{thead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((bodyItem, index) => (
            <tr className="border-b-2 bg-red-400 h-full p-12 " key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
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
              <td>
                <Button bg={"bg-blue-600"} >Edit user</Button>
                <Button bg={"bg-red-600"}>Delete user</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
