import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';

const customFetch = axios.create({
    baseURL: 'https://redux-toolkit-jobster-api-server.onrender.com/api/v1',
  });

  customFetch.interceptors.request.use(
    (config) => {
      const user = getUserFromLocalStorage()
      if(user) {
        config.headers['Authorization'] = `Bearer ${user.token}`;
        return config;
      }
    },
    (error) => {
      return Promise.reject(error)
    }
  )

export default customFetch;