
import { ModuleLayout } from "../../components/ModuleLayout"

const speciesColumns = [
  { title: 'Nombre', field: 'name' },
  { title: 'Clasificacion', field: 'classification' },
  { title: 'Designacion', field: 'designation' },
  { title: 'Estatura', field: 'height' },
  { title: 'Promedio de vida', field: 'avrgLife' },
  // { title: 'Color de ojos', field: 'eyesColor' },
  // { title: 'Color de cabello', field: 'hairColor' },
  // { title: 'Color de piel', field: 'skinColor' },
  // { title: 'Lenguaje', field: 'language' },
]
export default function SpeciesPage() {
  return (

    <ModuleLayout columns={speciesColumns} title="Especies" apiEndpoint="api/species" />
  )
}

