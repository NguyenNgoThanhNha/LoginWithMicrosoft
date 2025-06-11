// src/main.tsx
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'; // Đảm bảo dòng này đúng đường dẫn
import { ToastContainer } from 'react-toastify';
import App from './App';
import MicrosoftLogin from './pages/MicrosoftLogin';
import HomePage from './pages/HomePage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth/microsoft-callback" element={<MicrosoftLogin />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);
