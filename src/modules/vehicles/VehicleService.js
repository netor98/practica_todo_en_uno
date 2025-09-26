export const addVehicle = async (vehicle) => {
  try {
    const response = await fetch('http://localhost:3000/api/vehicles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicle),
    });
    // console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al agregar el vehículo');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteVehicle = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/vehicles/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al eliminar el vehículo');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const updateVehicle = async (vehicle) => {
  const { _id } = vehicle;
  try {
    const response = await fetch(`http://localhost:3000/api/vehicles/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicle),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al actualizar el vehículo');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getVehiclesList = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/vehicles/list');
    console.log('getVehiclesList response:', response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al obtener la lista de vehículos');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
