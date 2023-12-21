import { tableHead } from "./thead";
import { TbArrowsSort } from "react-icons/tb";
import {  useState } from "react";


const Tablehead = ({tableData,setTableData,selectedRows,setConfirm}) => {

  const [sortOrder, setSortOrder] = useState("asc"); // Sıralama düzeni

  const numericColumns = ["price"]; // Sayısal değer içeren sütunlar


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


    

      const sortTable = (columnName) => {
        const sortedData = [...tableData].sort((a, b) => {
          const valueA = isNumericColumn(columnName) ? a[columnName] : (a[columnName]?.toLowerCase() || '');
          const valueB = isNumericColumn(columnName) ? b[columnName] : (b[columnName]?.toLowerCase() || '');
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        });
        setTableData(sortedData);
      };
    
      // Tabloyu belirli bir sütuna göre tersine sıralayan fonksiyon
      const reverseSortTable = (columnName) => {
        const sortedData = [...tableData].sort((a, b) => {
          const valueA = isNumericColumn(columnName) ? a[columnName] : (a[columnName]?.toLowerCase() || '');
          const valueB = isNumericColumn(columnName) ? b[columnName] : (b[columnName]?.toLowerCase() || '');
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        });
        setTableData(sortedData);
      };

      
  return (
    <thead className="bg-gray-100">
    <tr>
      <th className="py-4 text-center px-2">
<button className=" text-black hover:opacity-80 px-2 py-1 rounded-lg hover:80"  action="deletelist" onClick={() => selectedRows.length > 0 && setConfirm(true)}>
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
</button>
        
      </th>
      {tableHead.map((thead, index) => (
        <th className="py-4" key={index}>
          <div className="flex items-center gap-5">
            <TbArrowsSort onClick={() => handleSort(thead.toLowerCase())} className="cursor-pointer" />
          </div>
        </th>
      ))}
      <th className="py-4 text-start w-[20%]"></th>
    </tr>
  </thead>
  )
}

export default Tablehead