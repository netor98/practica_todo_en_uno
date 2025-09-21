import App from '../../App';
import { ModuleLayout } from '../../components/ModuleLayout';

const moviesColumns = [
  { title: 'Título', field: 'title' },
  { title: 'Director', field: 'director' },
  { title: 'Productor', field: 'producer' },
];
export default function MoviesPage() {
  return (
    // <App name="Películas" />
    <ModuleLayout
      module="movies"
      columns={moviesColumns}
      title="Películas"
      apiEndpoint="api/movies"
    />
  );
}
