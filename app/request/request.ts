import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = <Response = any>(config: AxiosRequestConfig) => {
  const response = axios(config);
  return response as Response;
};

export const setAxiosRequestConfig = (baseURL: string, authorization: string) => {
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers['Authorization'] = authorization;
};
