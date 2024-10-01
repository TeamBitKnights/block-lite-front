import axios from 'axios';

const dbApi = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'content-type': 'application/json' },
});

export default dbApi;
