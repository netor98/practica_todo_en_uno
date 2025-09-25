import { ModuleLayout } from '../../components/ModuleLayout';

const planetsColumns = [
  { title: 'Nombre', field: 'name' },
  { title: 'Diametro', field: 'diameter' },
  { title: 'Periodo de rotacion', field: 'rotation_period' },
  { title: 'Periodo orbital', field: 'orbital_period' },
  { title: 'Gravedad', field: 'gravity' },
  // { title: "Poblacion", field: "population" },
  // { title: "Clima", field: "climate" },
  // { title: "Terreno", field: "terrain" },
  // { title: "Superficie de agua", field: "surface" },
];
export default function PlanetsPage() {
  return (
    <ModuleLayout
      module="planets"
      columns={planetsColumns}
      title="Planetas"
      apiEndpoint="api/planets"
    />
  );
}
