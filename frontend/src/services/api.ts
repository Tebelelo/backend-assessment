import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getStudents = () => API.get('/students');
export const addStudent = (data: any) => API.post('/students', data);
export const editStudent = (id: number, data: any) => API.put(`/students/${id}`, data);
export const deleteStudent = (id: number) => API.delete(`/students/${id}`);
