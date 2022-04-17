import axios from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.API_URL

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log('--error', error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    // console.log('------response', response);
    return response.data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  },
);
