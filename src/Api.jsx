import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const register = (data) => api.post('/register', data);
export const login = (data) => api.post('/login', data);
export const getUsers = (page) => api.get(`/users?page=${page}`);
export const getUser = (id) => api.get(`/users/${id}`);