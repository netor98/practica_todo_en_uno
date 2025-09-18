import { ModuleLayout } from "../../components/ModuleLayout"

const spaceShipsColumns = [
  { title: "Nombre", field: "name" },
  { title: "Modelo", field: "model" },
  { title: "Clase", field: "class" },
  { title: "Tamaño", field: "length" },
  { title: "Pasajeros", field: "passengers" },
  // { title: "Velocidad máxima", field: "maxSpeed" },
  // { title: "Capacidad de carga", field: "cargoCapacity" },
  // { title: "Consumibles", field: "consumables" },
  // { title: "Hiperimpulsor", field: "hyperdrive" },
  // { title: "MGLT", field: "MGLT" },

]
export default function SpaceShipsPage() {
  return (
    <ModuleLayout columns={spaceShipsColumns} title="Naves Espaciales" apiEndpoint="api/starships" />
  )
}

