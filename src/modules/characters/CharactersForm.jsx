import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getMoviesList } from '../movies/MovieService';
import { inputClasses } from '../InputClasses';

export const BLANK_SPACESHIP = {
  name: '',
  model: '',
  class: '',
  length: '',
  num_passengers: '',
  atmosphering_speed: '',
  cargo_capacity: '',
  max_time_consumable: '',
};

export default function CharactersForm({ onSubmit, initialData = {}, mode = 'view' }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const moviesList = await getMoviesList();
    setMovies(moviesList);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const CharacterSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    model: Yup.string().required('El model es obligatorio'),
    class: Yup.string(),
    length: Yup.string(),
    num_passengers: Yup.string(),
    max_atmosphering_speed: Yup.string(),
    cargo_capacity: Yup.string(),
    max_time_consumable: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        ...BLANK_SPACESHIP,
        ...initialData,
        movies: initialData.movies?.map((movie) => movie._id) || [],
      }}
      enableReinitialize
      onSubmit={async (values, helpers) => {
        await onSubmit(values, helpers);
        helpers.resetForm();
      }}
      validationSchema={CharacterSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form className="space-y-4 mb-10" onSubmit={handleSubmit}>
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
            <label className="block text-sm font-medium text-gray-700">Peliculas</label>
            {mode === 'view' ? (
              <input
                type="text"
                value={
                  movies.find((p) => p.id === initialData.movies?._id)?.title || 'unknown'
                }
                className={inputClasses}
                disabled
              />
            ) : (
              <Field
                as="select"
                name="native_planet"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
              >
                <option value="">Selecciona las peliculas</option>
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
