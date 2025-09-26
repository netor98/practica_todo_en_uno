import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getMoviesList } from '../movies/MovieService';
import { getVehiclesList } from '../vehicles/VehicleService';
import { inputClasses } from '../InputClasses';
import { getSpaceShipsList } from '../airships/SpaceShipService';

export const BLANK_CHARACTER = {
  name: '',
  birthdate: '',
  eyes_color: '',
  genre: '',
  hair_color: '',
  skin_color: '',
  height: '',
  mass: '',
  movies: [],
};
export default function CharactersForm({ onSubmit, initialData = {}, mode = 'view' }) {
  const [movies, setMovies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [spaceships, setSpaceships] = useState([]);

  const getData = async () => {
    const moviesList = await getMoviesList();
    const vehiclesList = await getVehiclesList();
    const spaceshipsList = await getSpaceShipsList();
    setMovies(moviesList);
    setVehicles(vehiclesList);
    setSpaceships(spaceshipsList);
  };

  useEffect(() => {
    getData();
  }, []);

  const CharacterSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    birthdate: Yup.string(),
    eyes_color: Yup.string(),
    genre: Yup.string(),
    hair_color: Yup.string(),
    skin_color: Yup.string(),
    height: Yup.string(),
    mass: Yup.string(),
    movies: Yup.array(),
    spaceships: Yup.array(),
    vehicles: Yup.array(),
  });

  return (
    <Formik
      initialValues={{
        ...BLANK_CHARACTER,
        ...initialData,
        movies: initialData.movies?.map((movie) => movie._id) || [],
        spaceships: initialData.spaceships || [],
        vehicles: initialData.vehicles || [],
      }}
      enableReinitialize
      onSubmit={onSubmit}
      validationSchema={CharacterSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form className="space-y-4 mb-20" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {mode === 'view'
                ? 'Ver Personaje'
                : mode === 'edit'
                  ? 'Editar Personaje'
                  : 'Agregar Personaje'}
            </h2>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre <span className="text-red-500 text-xl">*</span>
            </label>
            <Field
              type="text"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha de nacimiento
            </label>
            <Field
              type="text"
              name="birthdate"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Color de ojos
            </label>
            <Field
              type="text"
              name="eyes_color"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Genero</label>
            <Field
              type="text"
              name="genre"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Color de pelo
            </label>
            <Field
              type="text"
              name="hair_color"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Color de piel
            </label>
            <Field
              type="text"
              name="skin_color"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Altura</label>
            <Field
              type="text"
              name="height"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Peso</label>
            <Field
              type="text"
              name="mass"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Naves</label>
            {mode === 'view' ? (
              <textarea
                rows={initialData.starships?.length || 1}
                value={
                  spaceships
                    .filter((v) => initialData.starships?.includes(v.id))
                    .map((v) => v.name)
                    .join(', ') || ''
                }
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                disabled
              />
            ) : (
              <Field
                as="select"
                name="starships"
                multiple={true}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-100"
                disabled={mode === 'view'}
              >
                {spaceships.map((spacship) => (
                  <option key={spacship.id} value={spacship.id}>
                    {spacship.name}
                  </option>
                ))}
              </Field>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Vehicles</label>
            {mode === 'view' ? (
              <textarea
                rows={initialData.vehicles?.length || 1}
                value={
                  vehicles
                    .filter((v) => initialData.vehicles?.includes(v.id))
                    .map((v) => v.name)
                    .join(', ') || ''
                }
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                disabled
              />
            ) : (
              <Field
                as="select"
                name="vehicles"
                multiple={true}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-100"
                disabled={mode === 'view'}
              >
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.name}
                  </option>
                ))}
              </Field>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Peliculas</label>
            {mode === 'view' ? (
              <textarea
                rows={initialData.movies?.length || 1}
                value={initialData.movies?.map((v) => v.title).join(', ') || ''}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                disabled
              />
            ) : (
              <Field
                as="select"
                name="movies"
                multiple={true}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-100"
                disabled={mode === 'view'}
              >
                {movies.map((movie) => (
                  <option key={movie.id} value={movie.id}>
                    {movie.title}
                  </option>
                ))}
              </Field>
            )}
          </div>
          <div className="flex justify-end">
            {mode !== 'view' && (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 
                flex items-center justify-center disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : mode === 'add' ? (
                  'Agregar'
                ) : (
                  'Guardar Cambios'
                )}
              </button>
            )}
          </div>
        </form>
      )}
    </Formik>
  );
}
