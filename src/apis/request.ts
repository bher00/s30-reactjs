import type { AxiosRequestConfig, AxiosInstance } from 'axios';

import axios from 'axios';

export const createRequest = (config?: AxiosRequestConfig): AxiosInstance => {
  return axios.create(config);
};

export const randomUserRequest = createRequest({
  baseURL: 'https://randomuser.me',
});
