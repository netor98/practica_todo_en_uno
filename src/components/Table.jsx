import { Eye, PencilLine, Trash } from 'lucide-react';
import { useState } from 'react';
import { ModalDelete } from './ModalDelete';
import OffCanvas from './OffCanvas';
import MovieForm from '../modules/movies/MovieForm';
import PlanetsForm from '../modules/planets/PlanetsForm';
import { useEffect } from 'react';

export default function Table({ columns, data, module }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mode, setMode] = useState('view');

  useEffect(() => {
    console.log('module:', module);
  }, [module]);

  return (
    <div className="flex flex-col">
      <table className="min-w-full mt-5">
        <thead className="bg-gray-200">
          <tr className="[&>th]:bg-blue-800 [&>th]:border-0 text-white">
            {columns.map((col) => (
              <th key={col.field} className="border border-gray-300 px-4 py-2">
                {col.title}
              </th>
            ))}

            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 text-sm">
              {columns.map((col) => (
                <td key={col.field} className="border border-gray-300 px-4 py-2">
                  {item[col.field]}
                </td>
              ))}
              <td className="border border-gray-300  ">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setIsOffCanvasOpen(true)}
                    className="bg-gray-200 px-1 py-1 text-blue-500 rounded-lg text-sm
                  hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => {
                      setMode('edit');
                      setIsOffCanvasOpen(true);
                      console.log('a');
                    }}
                    className="bg-gray-200 px-1 py-1 text-blue-500 rounded-lg text-sm
                  hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                  >
                    <PencilLine size={16} />
                  </button>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gray-200 px-1 py-1 text-red-500 rounded-lg text-sm
                  hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDelete isOpen={isModalOpen} onClose={(value) => setIsModalOpen(!value)} />
      <OffCanvas isOpen={isOffCanvasOpen} onClose={() => setIsOffCanvasOpen(false)}>
        {module === 'movies' && <MovieForm mode={mode} />}
      </OffCanvas>
    </div>
  );
}
