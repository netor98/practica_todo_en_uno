import { useEffect } from 'react';
import MenuCollapsed from './MenuCollapsed';
import Table from './Table';
import { Pagination } from './Pagination';
import { useState } from 'react';
import Searcher from './Searcher';

export function ModuleLayout({ columns, title, apiEndpoint, module }) {
  const api = 'http://localhost:3000';
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (totalItems > 0 && totalItems >= totalItems) setCurrentPage(1);
  }, [itemsPerPage, totalItems]);

  useEffect(() => {
    fetch(`${api}/${apiEndpoint}?limit=${itemsPerPage}&page=${currentPage}`)
      .then((res) => res.json())
      .then((response) => {
        setData(response.data);
        setTotalItems(response.itemsCount);
      });
  }, [itemsPerPage, currentPage, apiEndpoint]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex">
      <MenuCollapsed />
      <div className="flex-1 flex flex-col h-screen mx-5 space-y-5 my-5">
        <div className="flex-1 bg-white rounded-2xl">
          <div
            className="h-16 bg-white flex items-center justify-between px-5 
            rounded-2xl shadow-md shadow-gray-200"
          >
            <h1 className="text-2xl font-bold text-blue-700">{title}</h1>

            <button
              className="bg-blue-200 text-blue-700 px-4 py-1 rounded-2xl text-md
                hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
            >
              + Agregar registro
            </button>
          </div>

          <Searcher />
          <Table
            columns={columns}
            data={data}
            setItemsPerPage={setItemsPerPage}
            module={module}
          />

          <div className="flex justify-end">
            <Pagination
              itemsPerPage={setItemsPerPage}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
