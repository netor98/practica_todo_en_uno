import { X } from 'lucide-react';
export default function OffCanvas({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 z-40
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="fixed inset-0 bg-gray-200 opacity-80"></div>
      <div
        className={`
          fixed top-0 right-0 h-full bg-white shadow-lg z-50
          transition-all duration-300 ease-out
          overflow-hidden 
          ${isOpen ? 'w-80' : 'w-0'}
        `}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-800 cursor-pointer"
          >
            <X />
            <span className="sr-only">Close panel</span>
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-full ">{children}</div>
      </div>
    </div>
  );
}
