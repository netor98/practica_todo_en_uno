export const addPlanet = async (planet) => {
  try {
    const response = await fetch('http://localhost:3000/api/planets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(planet),
    });
    // console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al agregar el planeta');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deletePlanet = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/planets/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al eliminar el planeta');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const updatePlanet = async (planet) => {
  const { _id } = planet;
  try {
    const response = await fetch(`http://localhost:3000/api/planets/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(planet),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al actualizar el planeta');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getPlanetsList = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/planets/list');
    console.log('getPlanetsList response:', response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al obtener la lista de planetas');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
