import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 10000,
});

// api.interceptors.request.use(async (config) => {
//   try {
//     const token = localStorage.getItem('forumAccessToken');

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   } catch (error) {
//     console.error('Erro ao configurar requisição:', error);
//     return Promise.reject(error);
//   }
// }, (error) => {
//   console.error('Erro no interceptor de requisição:', error);
//   return Promise.reject(error);
// });

export default api;