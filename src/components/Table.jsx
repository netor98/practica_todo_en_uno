import { Eye, PencilLine, Search, Trash } from "lucide-react";
import { Pagination } from "./Pagination";

export default function Table({ columns, data }) {
  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-end items-center ">

        <div className="flex items-center space-x-2 border border-gray-300 
          rounded-lg py-1 px-2 focus-within:shadow-md shadow-gray-200">
          <Search className="" />
          <input
            type="text"
            placeholder="Busqueda"
            className=" py-2 w-auto focus:outline-none "
          />
        </div>

      </div>

      <table className="min-w-full mt-5">
        <thead className="bg-gray-200">
          <tr className="[&>th]:bg-blue-800 [&>th]:border-0 text-white">
            {columns.map((col) => (
              <th key={col.field} className="border border-gray-300 px-4 py-2">{col.title}</th>
            ))}

            <th className="border border-gray-300 px-4 py-2">Acciones</th>
            {/* <th className="border border-gray-300 px-4 py-2">Director</th> */}
            {/* <th className="border border-gray-300 px-4 py-2">Productor</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 text-sm">
              {columns.map((col) => (
                <td key={col.field} className="border border-gray-300 px-4 py-2">{item[col.field]}</td>
              ))}
              <td className="border border-gray-300  ">
                <div className="flex items-center justify-center gap-2">
                  <button className="bg-gray-200 px-1 py-1 text-blue-500 rounded-lg text-sm
                  hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                    <Eye size={18} />
                  </button>
                  <button className="bg-gray-200 px-1 py-1 text-blue-500 rounded-lg text-sm
                  hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                    <PencilLine size={16} />
                  </button>
                  <button className="bg-gray-200 px-1 py-1 text-red-500 rounded-lg text-sm
                  hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                    <Trash size={16} />
                  </button>
                </div>
              </td>
            </tr>


          ))}
        </tbody>
      </table>
    </div >
  )
}
