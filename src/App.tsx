import { useEffect, useState } from 'react';
import { getMicrosoftLoginUrl } from './api/authApi';
// import microsoftLogo from './assets/microsoft-logo.png'; // Nếu bạn có ảnh local

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLogin = async () => {
    const url = await getMicrosoftLoginUrl();
    console.log('Redirecting to Microsoft login URL:', url);
    window.location.href = url;
  };

  useEffect(() => {
    // fade-in animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-100 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-[350px] animate-fade-in">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft Logo"
          className="w-24 h-24 mx-auto mb-4 animate-bounce"
        />
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Đăng nhập bằng Microsoft</h1>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Login with Microsoft
        </button>
      </div>
    </div>
  );
}

export default App;
