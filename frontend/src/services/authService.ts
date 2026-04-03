import { post } from './api';

export const login = async (email: string, password: string) => {
  const response = await post('/auth/login', { email, password });
  if (response.token) {
    localStorage.setItem('authToken', response.token);
  }
  return response;
};

export const register = async (name: string, email: string, password: string) => {
  const response = await post('/auth/register', { name, email, password });
  if (response.token) {
    localStorage.setItem('authToken', response.token);
  }
  return response;
};

export const logout = () => {
  localStorage.removeItem('authToken');
};