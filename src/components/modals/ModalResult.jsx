export function ModalResult({ message, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center
        bg-gray-200 opacity-85`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
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
