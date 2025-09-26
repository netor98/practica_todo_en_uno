export const addCharacter = async (character) => {
  try {
    const response = await fetch('http://localhost:3000/api/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
    // console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al agregar el personaje');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteCharacter = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/characters/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al eliminar el personaje');
    }
    if (response.status === 204) {
      return { message: 'Personaje eliminado correctamente' };
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const updateCharacter = async (character) => {
  const { _id } = character;
  try {
    const response = await fetch(`http://localhost:3000/api/characters/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al actualizar el personaje');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
