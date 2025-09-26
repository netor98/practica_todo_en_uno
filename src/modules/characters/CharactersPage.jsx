import { ModuleLayout } from '../../components/ModuleLayout';

const charactersColumns = [
  { title: 'Nombre', field: 'name' },
  { title: 'Altura', field: 'height' },
  { title: 'Masa', field: 'mass' },
  { title: 'Color de cabello', field: 'hair_color' },
  { title: 'Color de piel', field: 'skin_color' },
  { title: 'Color de ojos', field: 'eyes_color' },
  // { title: 'Año de nacimiento', field: 'birthYear' },
  // { title: 'Genero', field: 'gender' },
  // { title: 'Mundo natal', field: 'homeworld' },
  // { title: 'Especies', field: 'species' },
  // { title: 'Vehiculos', field: 'vehicles' },
  // { title: 'Naves', field: 'starships' },
  // { title: 'Peliculas', field: 'films' },
];

export default function CharactersPage() {
  return (
    <ModuleLayout
      columns={charactersColumns}
      title="Personajes"
      module="characters"
      apiEndpoint="api/characters"
    />
  );
}
