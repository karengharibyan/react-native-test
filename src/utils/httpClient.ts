import config from '@configs';
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const initHeaders: (token: string) => Promise<string> = token => {
  return new Promise(resolve => {
    httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    resolve('');
  });
};

export const resetHeaders: () => void = () => {
  httpClient.defaults.headers.common.Authorization = '';
};

httpClient.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error?.response?.status === 401) {
      // console.log(error);
    }
    return Promise.reject(error);
  },
);
