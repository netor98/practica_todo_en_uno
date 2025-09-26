import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { Loader2 } from 'lucide-react';

export const BLANK_VEHICLE = {
  name: '',
  model: '',
  class: '',
  length: '',
  num_passengers: '',
  atmosphering_speed: '',
  cargo_capacity: '',
  max_time_consumable: '',
};

export default function VehiclesForm({
  onSubmit,
  initialData = {},
  mode = 'view',
  onClose,
}) {
  const VehicleSchema = Yup.object().shape({
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
      initialValues={{ ...BLANK_VEHICLE, ...initialData }}
      enableReinitialize
      onSubmit={async (values, helpers) => {
        await onSubmit(values, helpers);
        helpers.resetForm();
      }}
      validationSchema={VehicleSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form className="space-y-4 mb-10" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {mode === 'view'
                ? 'Ver Vehículo'
                : mode === 'edit'
                  ? 'Editar Vehículo'
                  : 'Agregar Vehículo'}
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
              Modelo<span className="text-red-500 text-xl">*</span>
            </label>
            <Field
              type="text"
              name="model"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
            <ErrorMessage name="model" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Clase</label>
            <Field
              type="text"
              name="class"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tamaño</label>
            <Field
              type="text"
              name="length"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pasajeros</label>
            <Field
              type="text"
              name="passengers"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Máxima Velocidad Atmosférica
            </label>
            <Field
              type="text"
              name="atmosphering_speed"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Capacidad de Carga
            </label>
            <Field
              type="text"
              name="cargo_capacity"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tiempo Máximo de Consumibles
            </label>
            <Field
              type="text"
              name="max_time_consumable"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
              disabled={mode === 'view'}
            />
          </div>
          <div className="flex justify-end">
            {mode == 'view' && (
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
