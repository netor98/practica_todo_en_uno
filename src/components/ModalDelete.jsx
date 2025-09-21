export function ModalDelete({ isOpen, onClose, onConfirm, itemName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-200 opacity-75"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 opacity-100 z-10">
        <h3 className="font-bold text-lg mb-6">
          ¿Estás seguro de que deseas eliminar este registro?
        </h3>
        <div className="flex justify-center space-x-4 [&>button]:cursor-pointer">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sí
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
