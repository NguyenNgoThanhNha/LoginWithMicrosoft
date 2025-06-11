import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
            <div className="bg-white shadow-2xl rounded-3xl p-10 text-center animate-fade-in w-full max-w-lg">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    className="w-16 h-16 mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Chào mừng bạn đã đăng nhập!
                </h1>
                <p className="text-gray-600 mb-6">
                    Cảm ơn bạn đã sử dụng đăng nhập Microsoft. Chúc bạn một ngày tuyệt vời 🎉
                </p>
                <button
                    onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/');
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition transform hover:scale-105"
                >
                    Đăng xuất
                </button>
            </div>
        </div>
    );
};

export default HomePage;
