export function ModalResult({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-200 opacity-75"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 opacity-100 z-10">
        <h2 className="text-xl font-bold mb-4">Resultado</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
