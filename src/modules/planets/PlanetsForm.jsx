import { Field, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Loader2 } from 'lucide-react';

export const BLANK_PLANET = {
  name: '',
  gravity: '',
  terrain: '',
  diameter: '',
  rotation_period: '',
  orbital_period: '',
  population: '',
  climate: '',
  surface_water: '',
};

export default function PlanetsForm({ onSubmit, initialData = {}, mode = 'view' }) {
  const PlanetSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    gravity: Yup.string(),
    terrain: Yup.string(),
    diameter: Yup.string(),
    rotation_period: Yup.string(),
    orbital_period: Yup.string(),
    population: Yup.string(),
    climate: Yup.string(),
    surface_water: Yup.string(),
  });

  return (
    <Formik
      initialValues={{ ...BLANK_PLANET, ...initialData }}
      enableReinitialize
      onSubmit={async (values, helpers) => {
        await onSubmit(values, helpers);
        helpers.resetForm();
      }}
      validationSchema={PlanetSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form className="space-y-4 mb-10" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {mode === 'view'
                ? 'Ver Planeta'
                : mode === 'edit'
                  ? 'Editar Planeta'
                  : 'Agregar Planeta'}
            </h2>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre<span className="text-red-500 text-xl">*</span>
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
            <label className="block text-sm font-medium text-gray-700">Diametro</label>
            <Field
              type="text"
              name="diameter"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gravedad</label>
            <Field
              type="text"
              name="gravity"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Terreno</label>
            <Field
              type="text"
              name="terrain"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Periodo de Rotación
            </label>
            <Field
              type="text"
              name="rotation_period"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Periodo Orbital
            </label>
            <Field
              type="text"
              name="orbital_period"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Población</label>
            <Field
              type="text"
              name="population"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Clima</label>
            <Field
              type="text"
              name="climate"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Agua Superficial
            </label>
            <Field
              type="text"
              name="surface_water"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
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
