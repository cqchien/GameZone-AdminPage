import { axiosClient } from './axiosClient';

const getUserInfo = () =>
  axiosClient('/user/me', {
    method: 'GET'
  });

export { getUserInfo };
