import { axiosClient } from './axiosClient';

const loginWithEmail = (params) =>
  axiosClient('/auth/login', {
    method: 'POST',
    data: params
  });

export { loginWithEmail };
