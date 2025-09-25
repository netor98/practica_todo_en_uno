import { ModuleLayout } from '../../components/ModuleLayout';

const speciesColumns = [
  { title: 'Nombre', field: 'name' },
  { title: 'Clasificacion', field: 'classification' },
  { title: 'Designacion', field: 'designation' },
  { title: 'Estatura', field: 'avarage_height' },
  { title: 'Promedio de vida', field: 'avarage_life' },
  // { title: 'Color de ojos', field: 'eyesColor' },
  // { title: 'Color de cabello', field: 'hairColor' },
  // { title: 'Color de piel', field: 'skinColor' },
  // { title: 'Lenguaje', field: 'language' },
];
export default function SpeciesPage() {
  return (
    <ModuleLayout
      columns={speciesColumns}
      title="Especies"
      module="species"
      apiEndpoint="api/species"
    />
  );
}
