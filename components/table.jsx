import React, { useEffect, useState } from "react";
import { tableHead } from "./thead";
import { TbArrowsSort } from "react-icons/tb";
import { tableBody } from "./tbody";
import Tabletd from "./Tabletd";

const Table = ({ search, setUserForm }) => {
  // Sıralama durumu ve tablo verisi için state'leri tanımla
  const [sortOrder, setSortOrder] = useState("asc");
  const [tableData, setTableData] = useState(tableBody);

  // Seçilen satırları tutan state
  const [selectedRows, setSelectedRows] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;


  // Sayısal sütunların adlarını içeren dizi
  const numericColumns = ["price"];

  // Tabloyu belirtilen sütuna göre sıralayan fonksiyon
  const sortTable = (columnName) => {
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



  // Tabloyu belirtilen sütuna göre ters sıralayan fonksiyon
  const reverseSortTable = (columnName) => {
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

  // Sıralama düzenini değiştiren ve tabloyu sıralayan fonksiyon
  const handleSort = (columnName) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    // Artan veya azalan sıralama fonksiyonunu çağır
    if (newSortOrder === "asc") {
      sortTable(columnName);
    } else {
      reverseSortTable(columnName);
    }
  };

  // Sütunun sayısal olup olmadığını kontrol eden fonksiyon
  const isNumericColumn = (colName) => {
    return numericColumns.includes(colName);
  };

  // Checkbox değişikliklerini izleyen fonksiyon
  const handleCheckboxChange = (index) => {
    if (selectedRows.includes(index)) {
      // Seçili satırsa, listeden çıkar
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      // Seçili değilse, listeye ekle
      setSelectedRows([...selectedRows, index]);
    }
  };

  // Seçilen satırları silen fonksiyon
  const handleDeleteSelected = () => {
    const newTableData = tableData.filter((_, index) => !selectedRows.includes(index));
    setTableData(newTableData);
    setSelectedRows([]);
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTableData = tableData.slice(startIndex, endIndex);

  return (
    <div className="">
      <button onClick={handleDeleteSelected}>Delete Selected Rows</button>
      <table className="w-full">
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
        <Tabletd tableData={displayedTableData} search={search} setTableData={setTableData} setUserForm={setUserForm} selectedRows={selectedRows} handleCheckboxChange={handleCheckboxChange} />
      </table>
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevPage} className="cursor-pointer" disabled={currentPage === 1}>Önceki</button>
        <span>Sayfa {currentPage}</span>
        <button onClick={handleNextPage} className="cursor-pointer" disabled={endIndex >= tableData.length}>Sonraki</button>
      </div>
    </div>
  );
};


export default Table;