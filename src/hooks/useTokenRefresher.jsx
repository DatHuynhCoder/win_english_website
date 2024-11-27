import axios from 'axios';
import { useContext } from 'react';
import { ContextStore } from '../context/Context';

export const useTokenRefresher = () => {
  const { accessToken, setAccessToken, refreshToken } = useContext(ContextStore);

  const instance = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          // Gửi yêu cầu làm mới token
          const res = await axios.post('http://localhost:8081/refreshToken', { refreshToken });
          setAccessToken(res.data.accessToken); // Lưu token mới vào state
          originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
          return instance(originalRequest); // Gửi lại request với token mới
        } catch (err) {
          console.error('Failed to refresh token:', err);
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
