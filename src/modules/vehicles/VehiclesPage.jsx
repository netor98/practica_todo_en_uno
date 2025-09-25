import { ModuleLayout } from '../../components/ModuleLayout';

const vehiclesColumns = [
  { title: 'Nombre', field: 'name' },
  { title: 'Modelo', field: 'model' },
  { title: 'Clase', field: 'class' },
  { title: 'Tamaño', field: 'length' },
  { title: 'Pasajeros', field: 'passengers' },
  // { title: "Velocidad máxima", field: "maxSpeed" },
  // { title: "Capacidad de carga", field: "cargoCapacity" },
  // { title: "Consumibles", field: "consumables" },
];
export default function VehiclesPage() {
  return (
    <ModuleLayout
      columns={vehiclesColumns}
      module="vehicles"
      title="Vehiculos"
      apiEndpoint="api/vehicles"
    />
  );
}
