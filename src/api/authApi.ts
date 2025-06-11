// src/api/authApi.ts
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://localhost:54451/api', // thay URL backend của bạn
    withCredentials: true,
});

export const getMicrosoftLoginUrl = async (): Promise<string> => {
    const res = await API.get<any>('/users/get-redirect-url');
    return res.data.data.url;
};

export const loginWithMicrosoftCode = async (code: string) => {
    const res = await API.post('/users/login-with-ms-token', { token: code });
    return res.data; // chứa: token, email, fullname,...
};
