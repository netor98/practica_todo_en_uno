import { useEffect, useState } from 'react';
import MenuCollapsed from './MenuCollapsed';
import Table from './Table';
import { Pagination } from './Pagination';
import Searcher from './Searcher';
import OffCanvas from './OffCanvas';
import MovieForm from '../modules/movies/MovieForm';
import { addMovie, deleteMovie, updateMovie } from '../modules/movies/MovieService';
import { ModalResult } from './modals/ModalResult';
import PlanetsForm from '../modules/planets/PlanetsForm';
import SpeciesForm from '../modules/species/SpeciesForm';
import VehiclesForm from '../modules/vehicles/VehiclesForm';
import SpaceShipsForm from '../modules/airships/SpaceShipsForm';
import CharactersForm from '../modules/characters/CharactersForm';
import { addPlanet, deletePlanet, updatePlanet } from '../modules/planets/PlanetService';
import { ModalDelete } from './ModalDelete';
import {
  addVehicle,
  updateVehicle,
  deleteVehicle,
} from '../modules/vehicles/VehicleService';
import {
  addSpaceShip,
  deleteSpaceShip,
  updateSpaceShip,
} from '../modules/airships/SpaceShipService';
import { addSpecie, deleteSpecie, updateSpecie } from '../modules/species/SpecieService';
import {
  addCharacter,
  deleteCharacter,
  updateCharacter,
} from '../modules/characters/CharacterService';

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
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const fechData = async () => {
    const response = await fetch(
      `${api}/${apiEndpoint}?limit=${itemsPerPage}&page=${currentPage}`,
    );
    const result = await response.json();
    setData(result.data || []);
    setTotalItems(result.itemsCount);
    setSearchTerm('');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // useEffect(() => {
  //   let apiUrl = `${api}/${apiEndpoint}/find`;
  //   if (debouncedSearchTerm) {
  //     apiUrl += `?name=${debouncedSearchTerm}`;
  //
  //     fetch(apiUrl)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setData(result.data || [] || result);
  //         setTotalItems(result.length || result.itemsCount || 0);
  //       });
  //   } else {
  //     fechData();
  //   }
  // }, [debouncedSearchTerm]);

  const handleOpen = (mode, item = {}) => {
    setMode(mode);
    if (mode !== 'add') {
      setSelectedItem(item);
    } else {
      setSelectedItem({});
    }
    setIsOffCanvasOpen(true);
  };

  const handleClose = () => {
    setIsOffCanvasOpen(false);
    setSelectedItem({});
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
        setModalMessage(`Error al realizar la operacion. ${error}`);
        setIsModalOpen(true);
        setSubmitting(false);
      } finally {
        fechData();
        setSelectedItem({});
      }
    };
  };

  const handleOpenDeleteModal = (item) => {
    setItemToDelete(item);
    setIsModalDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;

    const deleteFunction = {
      movies: deleteMovie,
      planets: deletePlanet,
      vehicles: deleteVehicle,
      spaceships: deleteSpaceShip,
      species: deleteSpecie,
      characters: deleteCharacter,
    }[module];

    try {
      await deleteFunction(itemToDelete);
      setModalMessage('Registro eliminado con éxito');
      setIsModalOpen(true);
    } catch (error) {
      setModalMessage(`Error al eliminar el registro. ${error}`);
      setIsModalOpen(true);
    } finally {
      fechData();
      setItemToDelete(null);
      setIsModalDeleteOpen(false);
    }
  };

  useEffect(() => {
    if (totalItems > 0 && totalItems >= totalItems) setCurrentPage(1);
  }, [itemsPerPage, totalItems]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `${api}/${apiEndpoint}`;

        if (debouncedSearchTerm) {
          apiUrl += `/find?name=${debouncedSearchTerm}`;
          apiUrl += `&limit=${itemsPerPage}&page=${currentPage}`;
        } else {
          apiUrl += `?limit=${itemsPerPage}&page=${currentPage}`;
        }

        const response = await fetch(apiUrl);
        const result = await response.json();

        setData(result.data || []);
        setTotalItems(result.itemsCount || 0);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };

    fetchData();
  }, [debouncedSearchTerm, currentPage, itemsPerPage, apiEndpoint]);

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

          {module === 'characters' && (
            <Searcher
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          <Table
            columns={columns}
            data={data}
            setItemsPerPage={setItemsPerPage}
            module={module}
            onEdit={(item) => handleOpen('edit', item)}
            onView={(item) => handleOpen('view', item)}
            OnDelete={handleOpenDeleteModal}
          />

          <OffCanvas isOpen={isOffCanvasOpen} onClose={handleClose}>
            {module === 'movies' && (
              <MovieForm
                mode={mode}
                key={selectedItem ? selectedItem.id : 'new'}
                initialData={selectedItem}
                onSubmit={handleSubmit(
                  mode === 'add' ? addMovie : updateMovie,
                  mode === 'add'
                    ? 'Película agregada con éxito'
                    : 'Película actualizada con éxito',
                )}
              />
            )}
            {module === 'planets' && (
              <PlanetsForm
                mode={mode}
                initialData={selectedItem}
                onSubmit={handleSubmit(
                  mode === 'add' ? addPlanet : updatePlanet,
                  mode === 'add'
                    ? 'Planeta agregado con éxito'
                    : 'Planeta actualizado con éxito',
                )}
              />
            )}
            {module === 'species' && (
              <SpeciesForm
                mode={mode}
                initialData={selectedItem}
                onSubmit={handleSubmit(
                  mode === 'add' ? addSpecie : updateSpecie,
                  mode === 'add'
                    ? 'Especie agregada con éxito'
                    : 'Especie actualizada con éxito',
                )}
              />
            )}
            {module === 'vehicles' && (
              <VehiclesForm
                mode={mode}
                initialData={selectedItem}
                onSubmit={handleSubmit(
                  mode === 'add' ? addVehicle : updateVehicle,
                  mode === 'add'
                    ? 'Vehículo agregado con éxito'
                    : 'Vehículo actualizado con éxito',
                )}
              />
            )}
            {module === 'spaceships' && (
              <SpaceShipsForm
                mode={mode}
                initialData={selectedItem}
                onSubmit={handleSubmit(
                  mode === 'add' ? addSpaceShip : updateSpaceShip,
                  mode === 'add'
                    ? 'Nave espacial agregada con éxito'
                    : 'Nave espacial actualizada con éxito',
                )}
              />
            )}
            {module === 'characters' && (
              <CharactersForm
                mode={mode}
                initialData={selectedItem}
                onSubmit={handleSubmit(
                  mode === 'add' ? addCharacter : updateCharacter,
                  mode === 'add'
                    ? 'Personaje agregado con éxito'
                    : 'Personaje actualizado con éxito',
                )}
              />
            )}
          </OffCanvas>

          {isModalOpen && (
            <ModalResult message={modalMessage} onClose={() => setIsModalOpen(false)} />
          )}

          <ModalDelete
            isOpen={isModalDeleteOpen}
            itemName={itemToDelete}
            onConfirm={handleConfirmDelete}
            onClose={(value) => setIsModalDeleteOpen(!value)}
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
