  import React, { useEffect, useState } from "react";
    import UserForm from "./UserForm";
  import { tableHead } from "./thead";
  import { TbArrowsSort } from "react-icons/tb";
import { tableBody } from "./tbody";
import Tabletd from "./Tabletd";
  

  const Table = ({search}) => {
    const [userForm, setUserForm] = useState(false);
    const [sortOrder, setSortOrder] = useState("asc");
    const [tableData, setTableData] = useState(tableBody);

    const numericColumns = ["price"];

    const onSubmit = (values, { resetForm }) => {
      console.log("Form Gönderildi", values);
      resetForm();
      setUserForm(false);
    };


    const sortTable = (columnName) => {
      const sortedData = [...tableData].sort((a, b) => {
        const valueA = isNumericColumn(columnName) ? a[columnName] : a[columnName].toLowerCase();
        const valueB = isNumericColumn(columnName) ? b[columnName] : b[columnName].toLowerCase();
    
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
    
    const reverseSortTable = (columnName) => {
      const sortedData = [...tableData].sort((a, b) => {
        const valueA = isNumericColumn(columnName) ? a[columnName] : a[columnName].toLowerCase();
        const valueB = isNumericColumn(columnName) ? b[columnName] : b[columnName].toLowerCase();
    
        if (valueA > valueB) {
          return -1;
        }
        if (valueA < valueB) {
          return 1;
        }
        return 0;
      });
      setTableData(sortedData);
    };

    const handleSort = (columnName) => {
      const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
      setSortOrder(newSortOrder);

      if (newSortOrder === "asc") {
        sortTable(columnName);
      } else {
        reverseSortTable(columnName);
      }
    };

    const isNumericColumn = (colName) => {
      return numericColumns.includes(colName);
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
                >
              <div className="flex items-center gap-5">   {thead} <TbArrowsSort onClick={() => handleSort(thead.toLowerCase())} className="cursor-pointer" /></div>

                </th>
              ))}
              <th className=" py-4 text-start w-[20%]"> </th>
            </tr>
          </thead>
     <Tabletd tableData={tableData} setUserForm={setUserForm} search={search}  setTableData={setTableData}/>
        </table>
      </div>
    );
  };

  export default Table;
