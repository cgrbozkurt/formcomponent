import { useEffect, useState } from "react";
import Tabletd from "./Tabletd";
import Deleteconfirmation from "./Deleteconfirmation"; // Silme işlemi onayı için ayrı bir bileşen
import { tableBody } from "./tbody";
import Tablehead from "./Tablehead";

const Table = ({ search, setUserForm }) => {
  // State değişkenleri
  const [tableData, setTableData] = useState(tableBody); // Tablo verisi
  const [selectedRows, setSelectedRows] = useState([]); // Seçili satırlar
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa numarası
  const itemsPerPage = 5; // Sayfa başına gösterilecek öğe sayısı
  const [displayedTableData, setDisplayedTableData] = useState([]); // Sayfa numarasına göre filtrelenmiş görünen tablo verisi
  const [deleteId,setDeleteId]=useState(false)

 console.log(deleteId)
  // Sayfa veya tablo verisi değiştiğinde çalışacak useEffect
  useEffect(() => {
    updateDisplayedTableData();
  }, [currentPage, tableData]);

  // Tabloyu belirli bir sütuna göre sıralayan fonksiyon
  

  // Sıralama düzenini güncelleyen ve tabloyu sıralayan fonksiyon
  

  // Sayısal sütun olup olmadığını kontrol eden fonksiyon
  

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
      <Deleteconfirmation action="deletelist" confirm={confirm} setConfirm={setConfirm} handleDeleteSelected={handleDeleteSelected} 
      selectedRows={selectedRows} deleteId={deleteId} setDeleteId={setDeleteId} /> {/* Silme işlemi onayı bileşeni */}
      <table className="w-full transition-all duration-1000 overflow-x-auto">
       <Tablehead
       tableData={tableData}
       setTableData={setTableData}
       selectedRows={selectedRows}
       setConfirm={setConfirm}
       />
        <Tabletd
        setDeleteId={setDeleteId}
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

      <div className="flex justify-between mt-4 items-center text-center py-2">
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