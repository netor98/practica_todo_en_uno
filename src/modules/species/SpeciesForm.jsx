import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { inputClasses } from '../InputClasses';
import { getPlanetsList } from '../planets/PlanetService';

export const BLANK_SPECIE = {
  name: '',
  classification: '',
  designation: '',
  average_height: '',
  average_lifespan: '',
  eye_color: '',
  hair_color: '',
  skin_color: '',
  language: '',
  native_planet: '',
};
export default function SpeciesForm({
  onSubmit,
  initialData = {},
  mode = 'view',
  onClose,
}) {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const response = await getPlanetsList();
    setPlanets(response);
  };
  useEffect(() => {
    fetchPlanets();
  }, []);

  const SpecieSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    classification: Yup.string(),
    designation: Yup.string(),
    average_height: Yup.string(),
    average_lifespan: Yup.string(),
    eye_color: Yup.string(),
    hair_color: Yup.string(),
    skin_color: Yup.string(),
    language: Yup.string(),
    native_planet: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        ...BLANK_SPECIE,
        ...initialData,
        native_planet: initialData.native_planet?._id,
      }}
      enableReinitialize
      onSubmit={async (values, helpers) => {
        await onSubmit(values, helpers);
        helpers.resetForm();
      }}
      validationSchema={SpecieSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form className="space-y-4 mb-10" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {mode === 'view'
                ? 'Ver Especie'
                : mode === 'edit'
                  ? 'Editar Especie'
                  : 'Agregar Especie'}
            </h2>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <Field
              type="text"
              name="name"
              className={inputClasses}
              disabled={mode === 'view'}
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Clasificación
            </label>
            <Field
              type="text"
              name="classification"
              className={inputClasses}
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Designación</label>
            <Field
              type="text"
              name="designation"
              className={inputClasses}
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estatura Promedio
            </label>
            <Field
              type="text"
              name="average_height"
              className={inputClasses}
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Esperanza de Vida
            </label>
            <Field
              type="text"
              name="average_lifespan"
              className={inputClasses}
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Color de Ojos
            </label>
            <Field
              type="text"
              name="eye_color"
              className={inputClasses}
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Color de Cabello
            </label>
            <Field
              type="text"
              name="hair_color"
              className={inputClasses}
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Color de Piel
            </label>
            <Field
              type="text"
              name="skin_color"
              className={inputClasses}
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Idioma</label>
            <Field
              type="text"
              name="language"
              className={inputClasses}
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Planeta Nativo
            </label>
            {mode === 'view' ? (
              <input
                type="text"
                value={
                  planets.find((p) => p.id === initialData.native_planet?._id)?.name ||
                  'unknown'
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
                <option value="">Selecciona un planeta</option>
                {planets.map((planet) => (
                  <option key={planet.id} value={planet.id}>
                    {planet.name}
                  </option>
                ))}
              </Field>
            )}
          </div>
          <div className="flex justify-end">
            {mode === 'view' && (
              <button
                type="button"
                onClick={() => onClose()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-gray-700"
              >
                Volver
              </button>
            )}
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
