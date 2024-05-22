import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';

export const request = <Response = any>(config: AxiosRequestConfig) => {
  const response = axios(config);
  return response as Response;
};

export const setAxiosRequestConfig = (baseURL: string, authorization: string) => {
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers['Authorization'] = authorization;
};
