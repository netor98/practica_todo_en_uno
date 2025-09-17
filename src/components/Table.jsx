import { Search } from "lucide-react";

export default function Table({ columns }) {
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
            {/* <th className="border border-gray-300 px-4 py-2">Titulo</th> */}
            {/* <th className="border border-gray-300 px-4 py-2">Director</th> */}
            {/* <th className="border border-gray-300 px-4 py-2">Productor</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Data 1</td>
            <td className="border border-gray-300 px-4 py-2">Data 2</td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}
