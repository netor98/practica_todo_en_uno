
import { ModuleLayout } from "../../components/ModuleLayout"

const planetsColumns = [
  { title: "Nombre", field: "name" },
  { title: "Diametro", field: "diameter" },
  { title: "Periodo de rotacion", field: "rotation" },
  { title: "Periodo orbital", field: "orbital" },
  { title: "Gravedad", field: "gravity" },
  { title: "Poblacion", field: "population" },
  { title: "Clima", field: "climate" },
  { title: "Terreno", field: "terrain" },
  { title: "Superficie de agua", field: "surface" },
]
export default function PlanetsPage() {
  return (
    <ModuleLayout columns={planetsColumns} title="Planetas" />
  )
}
