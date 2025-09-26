export const deleteSpecie = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/species/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al eliminar la especie');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const addSpecie = async (specie) => {
  try {
    const response = await fetch('http://localhost:3000/api/species', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(specie),
    });
    // console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al agregar la especie');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const updateSpecie = async (specie) => {
  const { _id } = specie;
  try {
    const response = await fetch(`http://localhost:3000/api/species/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(specie),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al actualizar la especie');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getSpeciesList = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/species/list');
    console.log('getSpeciesList response:', response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al obtener la lista de especies');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
