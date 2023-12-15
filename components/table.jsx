import React, { useEffect, useState } from "react";
import { tableHead } from "./thead";
import { TbArrowsSort } from "react-icons/tb";
import Tabletd from "./Tabletd";
import { tableBody } from "./tbody";

const Table = ({ search, setUserForm }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [tableData, setTableData] = useState(tableBody);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [displayedTableData, setDisplayedTableData] = useState([]);

  const numericColumns = ["price"];

  useEffect(() => {
    updateDisplayedTableData();
  }, [currentPage, tableData]);

  const sortTable = (columnName) => {
    const sortedData = [...tableData].sort((a, b) => {
      const valueA = isNumericColumn(columnName) ? a[columnName] : (a[columnName]?.toLowerCase() || '');
      const valueB = isNumericColumn(columnName) ? b[columnName] : (b[columnName]?.toLowerCase() || '');
      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    });
    setTableData(sortedData);
  };
  
  const reverseSortTable = (columnName) => {
    const sortedData = [...tableData].sort((a, b) => {
      const valueA = isNumericColumn(columnName) ? a[columnName] : (a[columnName]?.toLowerCase() || '');
      const valueB = isNumericColumn(columnName) ? b[columnName] : (b[columnName]?.toLowerCase() || '');
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
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

  const handleCheckboxChange = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedTable = [...tableData];
    const selectedIds = selectedRows.map(index => updatedTable[(currentPage - 1) * itemsPerPage + index]?.id).filter(Boolean);
    setSelectedRows([]);
    
    const newTableData = updatedTable.filter(item => !selectedIds.includes(item.id));
    setTableData(newTableData);
    updateDisplayedTableData();
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(tableData.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const updateDisplayedTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const updatedDisplayedTableData = tableData.slice(startIndex, endIndex);
    setDisplayedTableData(updatedDisplayedTableData);
  };

  return (
    <div>
    <button onClick={handleDeleteSelected}>Delete Selected Rows</button>
  
        <table className="w-full transition-all duration-1000">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 text-center px-2">
                <input type="checkbox" onChange={() => setSelectedRows([])} />
              </th>
              {tableHead.map((thead, index) => (
                <th className="py-4" key={index}>
                  <div className="flex items-center gap-5">
                    {thead} <TbArrowsSort onClick={() => handleSort(thead.toLowerCase())} className="cursor-pointer" />
                  </div>
                </th>
              ))}
              <th className="py-4 text-start w-[20%]"></th>
            </tr>
          </thead>
          <Tabletd
            tableData={displayedTableData}
            search={search}
            setTableData={setTableData}
            setUserForm={setUserForm}
            selectedRows={selectedRows}
            handleCheckboxChange={handleCheckboxChange}
          />
        </table>
      

    <div className="flex justify-between mt-4">
      <button onClick={handlePrevPage} className="cursor-pointer" disabled={currentPage === 1}>
        Önceki
      </button>
      <span>Sayfa {currentPage}</span>
      <button onClick={handleNextPage} className="cursor-pointer" disabled={displayedTableData.length < itemsPerPage}>
        Sonraki
      </button>
    </div>
  </div>
  );
};

export default Table;
