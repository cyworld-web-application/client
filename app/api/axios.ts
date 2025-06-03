import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const api = axios.create({
  baseURL: 'https://cyworldbeta.duckdns.org/cyworld/musicShop',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    response.data = camelcaseKeys(response.data, { deep: true });
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
