import axios from 'axios';

const etherApi = axios.create({
  baseURL: 'http://localhost:9650/ext/bc/C/rpc',
  headers: { 'content-type': 'application/json' },
});

export default etherApi;
