export const addSpaceShip = async (spaceShip) => {
  try {
    const response = await fetch('http://localhost:3000/api/starships', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(spaceShip),
    });
    // console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al agregar la nave espacial');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteSpaceShip = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/starships/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al eliminar la nave espacial');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const updateSpaceShip = async (spaceShip) => {
  const { _id } = spaceShip;
  try {
    const response = await fetch(`http://localhost:3000/api/starships/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(spaceShip),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al actualizar la nave espacial');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getSpaceShipsList = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/starships/list');
    console.log('getSpaceShipsList response:', response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al obtener la lista de naves espaciales');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
