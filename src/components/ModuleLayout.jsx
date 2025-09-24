import { useEffect } from 'react';
import MenuCollapsed from './MenuCollapsed';
import Table from './Table';
import { Pagination } from './Pagination';
import { useState } from 'react';
import Searcher from './Searcher';
import OffCanvas from './OffCanvas';
import MovieForm, { BLANK_MOVIE } from '../modules/movies/MovieForm';
import { addMovie, deleteMovie } from '../modules/movies/MovieService';
import { ModalResult } from './modals/ModalResult';

export function ModuleLayout({ columns, title, apiEndpoint, module }) {
  const api = 'http://localhost:3000';
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [mode, setMode] = useState('view');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log('Selected Item:', selectedItem);
  }, [selectedItem]);

  const fechData = async () => {
    const response = await fetch(
      `${api}/${apiEndpoint}?limit=${itemsPerPage}&page=${currentPage}`,
    );
    const result = await response.json();
    setData(result.data);
    setTotalItems(result.itemsCount);
  };

  const handleOpen = (mode, item = {}) => {
    setMode(mode);
    if (mode !== 'add') {
      setSelectedItem(item);
    } else {
      setSelectedItem(BLANK_MOVIE);
    }
    setIsOffCanvasOpen(true);
  };

  const handleClose = () => {
    setIsOffCanvasOpen(false);
    setSelectedItem(BLANK_MOVIE);
  };

  //
  const handleSubmit = (serviceFunction, message) => {
    return async (item, { setSubmitting }) => {
      try {
        await serviceFunction(item);
        setSubmitting(false);
        setModalMessage(message || 'Operación realizada con éxito');
        setIsModalOpen(true);
        handleClose();
      } catch (error) {
        setModalMessage(`Error al agregar la película. ${error}`);
        setIsModalOpen(true);
        setSubmitting(false);
      } finally {
        fechData();
        setSelectedItem(BLANK_MOVIE);
      }
    };
  };

  const handleDelete = async (id) => {
    try {
      console.log('Deleting item with id:', id);
      await deleteMovie(id);
      setModalMessage('Registro eliminado con éxito');
      setIsModalOpen(true);
    } catch (error) {
      setModalMessage(`Error al eliminar el registro. ${error}`);
      setIsModalOpen(true);
    } finally {
      fechData();
    }
  };

  useEffect(() => {
    if (totalItems > 0 && totalItems >= totalItems) setCurrentPage(1);
  }, [itemsPerPage, totalItems]);

  useEffect(() => {
    fechData();
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
              onClick={() => handleOpen('add')}
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
            onEdit={(item) => handleOpen('edit', item)}
            onView={(item) => handleOpen('view', item)}
            OnDelete={(id) => {
              handleDelete(id);
            }}
          />

          <OffCanvas isOpen={isOffCanvasOpen} onClose={handleClose}>
            {module === 'movies' && (
              <MovieForm
                mode={mode}
                key={selectedItem ? selectedItem.id : 'new'}
                initialData={selectedItem}
                onSubmit={handleSubmit(addMovie, 'Película agregada con éxito')}
              />
            )}
          </OffCanvas>

          {isModalOpen && (
            <ModalResult message={modalMessage} onClose={() => setIsModalOpen(false)} />
          )}
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
