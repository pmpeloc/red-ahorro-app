import axios from 'axios';
import { useAuthStore } from '../modules/auth/store/auth.store';

const rdaApi = axios.create({
  baseURL: import.meta.env.VITE_RDA_API,
  withCredentials: true,
});

rdaApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});

export default rdaApi;
