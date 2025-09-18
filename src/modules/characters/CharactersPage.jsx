import { ModuleLayout } from '../../components/ModuleLayout'

const charactersColumns = [
  { title: 'Nombre', field: 'name' },
  { title: 'Altura', field: 'height' },
  { title: 'Masa', field: 'mass' },
  { title: 'Color de cabello', field: 'hairColor' },
  { title: 'Color de piel', field: 'skinColor' },
  { title: 'Color de ojos', field: 'eyeColor' },
  { title: 'Año de nacimiento', field: 'birthYear' },
  { title: 'Genero', field: 'gender' },
  { title: 'Mundo natal', field: 'homeworld' },
  { title: 'Especies', field: 'species' },
  { title: 'Vehiculos', field: 'vehicles' },
  { title: 'Naves', field: 'starships' },
  { title: 'Peliculas', field: 'films' },
]

export default function CharactersPage() {
  return (
    <ModuleLayout columns={charactersColumns} title="Personajes" apiEndpoint="api/characters" />
  )
}

