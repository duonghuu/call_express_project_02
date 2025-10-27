import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // thay bằng API thật
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 🧩 Interceptor cho request — thêm token nếu có
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = process.env.API_TOKEN;
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 🧩 Interceptor cho response — xử lý lỗi chung
apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        console.error('API Error:', error.message);
        return Promise.reject(error);
    }
);

export default apiClient;
