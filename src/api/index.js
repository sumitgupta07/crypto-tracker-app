import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.stackadapt.com/coinmarketcap',
});

export default api;
