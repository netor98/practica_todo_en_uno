export const addMovie = async (movie) => {
  try {
    const response = await fetch('http://localhost:3000/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    // console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al agregar la película');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
