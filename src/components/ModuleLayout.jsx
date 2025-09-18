import { useEffect } from "react"
import MenuCollapsed from "./MenuCollapsed"
import Table from "./Table"
import { useState } from "react"

export function ModuleLayout({ columns, title, apiEndpoint }) {
  const api = 'http://localhost:3000'
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`${api}/${apiEndpoint}`)
      .then((res) => res.json())
      .then(data => setData(data))
    console.log(apiEndpoint)
  })


  return (
    <div className="flex">
      <MenuCollapsed />
      <div className="flex-1 flex flex-col h-screen mx-5 space-y-5 my-5">
        <div className="flex-1 bg-white rounded-2xl">
          <div class='h-16 bg-white flex items-center justify-between px-5 rounded-2xl shadow-md shadow-gray-200'>
            <h1 className="text-2xl font-bold text-blue-700">{title}</h1>

            <button className="bg-blue-200 text-blue-700 px-4 py-1 rounded-2xl text-md
                hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
              + Agregar registro
            </button>
          </div>

          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}
