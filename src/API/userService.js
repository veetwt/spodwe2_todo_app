const BASE_URL = 'http://localhost:3000';

export const createUser = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${BASE_URL}/users`, options);
  
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Erro ao cadastrar usuário.');
  }
  
  return response.json();
};

export const authenticateUser = async (credentials) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };

  const response = await fetch(`${BASE_URL}/login`, options);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Erro ao autenticar usuário.');
  }
  
  return response.json();
};
