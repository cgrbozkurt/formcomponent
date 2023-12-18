import React, { useEffect, useState } from "react";
import { tableHead } from "./thead";
import { TbArrowsSort } from "react-icons/tb";
import Tabletd from "./Tabletd";
import Deleteconfirmation from "./Deleteconfirmation"; // Silme işlemi onayı için ayrı bir bileşen
import { tableBody } from "./tbody";

const Table = ({ search, setUserForm }) => {
  // State değişkenleri
  const [sortOrder, setSortOrder] = useState("asc"); // Sıralama düzeni
  const [tableData, setTableData] = useState(tableBody); // Tablo verisi
  const [selectedRows, setSelectedRows] = useState([]); // Seçili satırlar
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa numarası
  const itemsPerPage = 3; // Sayfa başına gösterilecek öğe sayısı
  const [displayedTableData, setDisplayedTableData] = useState([]); // Sayfa numarasına göre filtrelenmiş görünen tablo verisi

  const numericColumns = ["price"]; // Sayısal değer içeren sütunlar

  // Sayfa veya tablo verisi değiştiğinde çalışacak useEffect
  useEffect(() => {
    updateDisplayedTableData();
  }, [currentPage, tableData]);

  // Tabloyu belirli bir sütuna göre sıralayan fonksiyon
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

  // Sıralama düzenini güncelleyen ve tabloyu sıralayan fonksiyon
  const handleSort = (columnName) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  
    if (newSortOrder === "asc") {
      sortTable(columnName);
    } else {
      reverseSortTable(columnName);
    }
  };

  // Sayısal sütun olup olmadığını kontrol eden fonksiyon
  const isNumericColumn = (colName) => {
    return numericColumns.includes(colName);
  };


  // Seçili satırları silen fonksiyon
  const handleDeleteSelected = () => {
    const updatedTable = [...tableData];
    const selectedIds = selectedRows.map(id => id).filter(Boolean);
    setSelectedRows([]);

    const newTableData = updatedTable.filter(item => !selectedIds.includes(item.id));
    setTableData(newTableData);
    updateDisplayedTableData(); // Sayfa numarasına göre güncellenmiş tabloyu göster
  };

    // Checkbox değiştiğinde çalışan fonksiyon
    const handleCheckboxChange = (id) => {
      if (selectedRows.includes(id)) {
        setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      } else {
        setSelectedRows([...selectedRows, id]);
      }
    };
  

  // Sonraki sayfayı gösteren fonksiyon
  const handleNextPage = () => {
    const totalPages = Math.ceil(tableData.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Önceki sayfayı gösteren fonksiyon
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Sayfa numarasına göre güncellenmiş tabloyu set eden fonksiyon
  const updateDisplayedTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const updatedDisplayedTableData = tableData.slice(startIndex, endIndex);
    setDisplayedTableData(updatedDisplayedTableData);
  };

  const [confirm,setConfirm]=useState(false)

  return (
    <div className="">
      <Deleteconfirmation action="deletelist" confirm={confirm} setConfirm={setConfirm} handleDeleteSelected={handleDeleteSelected} /> {/* Silme işlemi onayı bileşeni */}
      <table className="w-full transition-all duration-1000 overflow-x-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-4 text-center px-2">
<button className=" text-black hover:opacity-80 px-2 py-1 rounded-lg hover:80" onClick={() => selectedRows.length > 0 && setConfirm(true)}>
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
</button>
              
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
        updateDisplayedTableData={updateDisplayedTableData}
        setDisplayedTableData={setDisplayedTableData}
        setConfirm={setConfirm}
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
        <span>Showing  {currentPage*3-2}-{currentPage*3} of {tableData.length} </span>
        <button onClick={handleNextPage} className="cursor-pointer" disabled={displayedTableData.length < itemsPerPage}>
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default Table;