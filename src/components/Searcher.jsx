import { Search } from "lucide-react"
export default function Searcher() {
  return (
    <div className="flex justify-end items-center mt-5">
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
  )
}
