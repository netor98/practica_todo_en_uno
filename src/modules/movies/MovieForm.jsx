import { Field, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Loader2 } from 'lucide-react';

const BLANK_MOVIE = {
  title: '',
  director: '',
  producer: '',
};

export default function MovieForm({ onSubmit, initialData = {}, mode = 'view' }) {
  const MovieSchema = Yup.object().shape({
    title: Yup.string().required('El título es obligatorio'),
    director: Yup.string().required('El director es obligatorio'),
    producer: Yup.string().required('El productor es obligatorio'),
  });

  return (
    <Formik
      initialValues={{ ...BLANK_MOVIE, ...initialData }}
      enableReinitialize
      onSubmit={onSubmit}
      validationSchema={MovieSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {mode === 'view'
                ? 'Ver Película'
                : mode === 'edit'
                  ? 'Editar Película'
                  : 'Agregar Película'}
            </h2>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Titulo</label>
            <Field
              type="text"
              name="title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Director</label>
            <Field
              type="text"
              name="director"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
            <ErrorMessage
              name="director"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Productor</label>
            <Field
              type="text"
              name="producer"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
            <ErrorMessage
              name="producer"
              component="div"
              className="text-red-500 text-sm"
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
