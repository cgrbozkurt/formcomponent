import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import UserForm from "./UserForm";
import { tableHead } from "./thead";

const Table = () => {
  const [userForm, setUserForm] = useState(false); // Başlangıçta formu gösterme
  const [newUser, setNewUser] = useState(null);
  const [tableData, setTableData] = useState([
    {
      img: "/images/neil-sims.png",
      name: "mehmet",
    lastName: "asdf",
    email: "asdf@gmail.com",
    phoneNumber: "asdf",
    department: "fasd",
    company: "adsf",
    currentPassword: "asdf",
    newPassword: "asdf",
    position:"front-end developer",
    country:"United States",
    status:"active"
    },
    {
      img: "/images/neil-sims.png",
      name: "amehmet",
    lastName: "asdf",
    email: "asdf@gmail.com",
    phoneNumber: "asdf",
    department: "fasd",
    company: "adsf",
    currentPassword: "asdf",
    newPassword: "asdf",
    position:"ufront-end developer",
    country:"ğUnited States",
    status:"kactive"
    },
    {
      img: "/images/neil-sims.png",
      name: "nmehmet",
    lastName: "asdf",
    email: "asdf@gmail.com",
    phoneNumber: "asdf",
    department: "fasd",
    company: "adsf",
    currentPassword: "asdf",
    newPassword: "asdf",
    position:"tfront-end developer",
    country:"yUnited States",
    status:"jactive"
    },
    {
      img: "/images/neil-sims.png",
      name: "bmehmet",
    lastName: "asdf",
    email: "asdf@gmail.com",
    phoneNumber: "asdf",
    department: "fasd",
    company: "adsf",
    currentPassword: "asdf",
    newPassword: "asdf",
    position:"afront-end developer",
    country:"xUnited States",
    status:"gactive"
    },
   
  ]);

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Gönderildi", values);
    setNewUser(values);
    resetForm();
    setUserForm(false); // Form gönderildikten sonra formu gizle
  };

  
  const sortTable = (columnName) => {
    const sortedData = [...tableData].sort((a, b) => {
      const valueA = a[columnName] ? a[columnName].toLowerCase() : "";
      const valueB = b[columnName] ? b[columnName].toLowerCase() : "";
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
    setTableData(sortedData);
  };

  const handleSort = (columnName) => {
    sortTable(columnName);
  };
  




  return (
    <div className="">
      {userForm && <UserForm setUserForm={setUserForm} isVisible={userForm} onSubmit={onSubmit} />}
      <table className="w-full">
        <thead className="bg-gray-100 ">
          <tr className="">
            <th className="py-4 text-center px-2 ">
              <input type="checkbox" />
            </th>
            {tableHead.map((thead, index) => (
              <th className="py-4 text-start" key={index}
              onClick={() => handleSort(thead.toLowerCase())}>
                {thead}
              </th>
            ))}
            <th className=" py-4 text-start w-[20%]"> </th>
          </tr>
        </thead>
        <tbody className="">
          {tableData.map((table, index) => (
            <tr className="border-b-2" key={index}>
              <td className="py-6 text-center ">
                <input type="checkbox" />
              </td>
              <td className="">
                <div className="flex gap-2">
                  <Image
                    width={43}
                    height={33}
                    className="rounded-full"
                    src={table.img
                  }
                    alt={table.name}
                  />
                  <div>
                    <h1 className="">{table.name} {table.lastName}</h1>
                    <span>{table.email}</span>
                  </div>
                </div>
              </td>
              <td>{table.position}</td>
              <td>{table.country}</td>
              <td>{table.status}</td>
              <td className="items-center  gap-5 ">
                <Button
                  index={index}
                  table={tableData}
                  setUserForm={setUserForm}
                  action="edit"
                  setTable={setTableData}
                  bg={"bg-addcolor mx-3  "}
                >
                  <div className="flex ">
                  <svg class="mr-2 h-5 w-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                  <span>Edit user</span>
                  </div>
                </Button>
                <Button
                  bg={"bg-red-600"}
                  table={tableData}
                  action="delete"
                  setTable={setTableData}
                  setUserForm={setUserForm}

                >
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
