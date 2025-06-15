import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const userApi = axios.create({
  baseURL: baseURL,
  withCredentials: true,
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
