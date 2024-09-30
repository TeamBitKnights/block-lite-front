import axios from 'axios';

const etherApi = axios.create({
  baseURL: 'http://127.0.0.1:9650/ext/bc/mySubnet/rpc',
  //baseURL : "https://testnet-rpc-seoul.gen.foundation",
  headers: { 'content-type': 'application/json' },
});

export default etherApi;
