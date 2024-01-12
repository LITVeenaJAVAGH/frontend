import axios from 'axios';
 
const API_URL = 'http://localhost:3043';
 
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
 
export const createUser = async (user) => {
  try {
    const response = await api.post('/api/users', user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
 
export const getUserByEmail = async (email) => {
  try {
    const response = await api.get(`/api/users/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
 
export const loginUser = async (credentials) => {
  try {
    console.log(credentials.email);
    const response = await api.post('/api/users/login', credentials);
    console.log(response.data);
    alert("User Login successful");
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
 
export const registerUser = async (user) => {
  try {
    console.log("hi"+user)
    const response = await api.post('/api/users/register', user);
    console.log("end")
    alert("successfully registered");
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};