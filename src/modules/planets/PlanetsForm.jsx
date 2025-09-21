export default function PlanetsForm({ onSubmit, initialData = {} }) {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          name="name"
          defaultValue={initialData.name || ''}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
    </form>
  );
}
