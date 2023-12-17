import React, { useMemo } from 'react';
import Image from 'next/image';
import Button from './Button';

const Tabletd = ({ tableData, setUserForm, setTableData, search, selectedRows, handleCheckboxChange ,newTableData}) => {
  const searchValue = search || '';

  // Filtrelenmiş tablo verilerini oluştur
  const filteredTableData = useMemo(() => {
    const lowerCaseSearch = searchValue.trim().toLowerCase();
    if (!lowerCaseSearch) {
      return tableData;
    }
    return tableData.filter((table) =>
      Object.values(table).some(
        (value) =>
          String(value).toLowerCase().includes(lowerCaseSearch)
      )
    );
  }, [searchValue, tableData]);

  return (
   
  <tbody className="">
      {filteredTableData.map((table) => (
        <tr className={selectedRows.includes(table.id) ? 'bg-gray-100' : 'hover:bg-gray-100 border-b-2'} key={table.id}>
          <td className="py-6 text-center">
            {/* Her satır için bir checkbox ekleyerek seçili satırları takip et */}
            <input type="checkbox" checked={selectedRows.includes(table.id)} onChange={() => handleCheckboxChange(table.id)} />
          </td>
          <td>
            <div className="flex gap-2">
              {/* Resim ve bilgileri gösteren kısım */}
              <Image width={43} height={33} className="rounded-full" src={table.img} alt={table.name} />
              <div>
                <h1>{table.name} {table.lastName}</h1>
                <span>{table.email}</span>
              </div>
            </div>
          </td>
          {/* Diğer tablo sütunları */}
          <td>{table.position}</td>
          <td>{table.country}</td>
          <td>{table.status}</td>
          <td>{table.price}</td>
          <td className="items-center gap-5">
            {/* Düzenleme butonu */}
            <Button id={table.id}  setUserForm={setUserForm} action="edit" setTableData={setTableData} bg={"bg-addcolor mx-3"}>
              <div className="flex">
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
                </svg>
                <span>Edit user</span>
              </div>
            </Button>
            {/* Silme butonu */}
            <Button id={table.id}
            newTableData={newTableData}
             bg={"bg-red-600"} table={filteredTableData} tableData={tableData} action="delete" setTableData={setTableData} setUserForm={setUserForm}>
              Delete user
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tabletd;
