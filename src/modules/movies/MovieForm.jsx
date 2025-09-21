import { useEffect } from 'react';
export default function MovieForm({ onSubmit, initialData = {}, mode = 'view' }) {
  useEffect(() => {
    console.log('Mode:', mode);
  }, [mode]);

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Titulo</label>
        <input
          type="text"
          name="title"
          defaultValue={initialData.title || ''}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2
          disabled:bg-gray-100 disabled:cursor-not-allowed"
          disabled={mode === 'view'}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Director</label>
        <input
          type="text"
          name="director"
          defaultValue={initialData.director || ''}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Productor</label>
        <input
          type="text"
          name="productor"
          defaultValue={initialData.productor || ''}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
