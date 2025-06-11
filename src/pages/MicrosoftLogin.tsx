// src/pages/MicrosoftLogin.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithMicrosoftCode } from '../api/authApi';
import { toast } from 'react-toastify';

const MicrosoftLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log('Microsoft login code:', code);

        if (code) {
            loginWithMicrosoftCode(code)
                .then((data) => {
                    console.log('Login success:', data);
                    toast.success('Đăng nhập thành công!');
                    localStorage.setItem('token', data.data.accessToken);
                    setTimeout(() => navigate('/home'), 1000);
                })
                .catch((err) => {
                    console.error('Login error:', err);
                    toast.error('Đăng nhập thất bại!');
                });
        }
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-6 animate-fade-in">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    className="w-20 h-20 animate-pulse"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                    Đang đăng nhập bằng Microsoft...
                </h2>
                <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default MicrosoftLogin;
