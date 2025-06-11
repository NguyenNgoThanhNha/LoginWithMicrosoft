# 🔐 Login With Microsoft – Fullstack Demo

Ứng dụng demo đăng nhập bằng tài khoản Microsoft, sử dụng React (frontend) và ASP.NET Core (backend).

## 🛠️ Công nghệ sử dụng

- ⚛️ Frontend: React + TailwindCSS + React Router
- 🚀 Backend: ASP.NET Core 8.0
- 🧠 OAuth2.0 + Microsoft Identity Platform (Azure AD)
- 🧪 Toastify, Axios, JWT (tuỳ chọn)

---

## 🧩 Kiến trúc chức năng

1. Frontend gọi API `/api/auth/microsoft-url` để lấy link đăng nhập Microsoft
2. Người dùng được chuyển hướng đến Microsoft login
3. Microsoft trả về `code` thông qua redirect URI
4. Backend dùng `code` để lấy `access_token` từ Microsoft
5. Backend gọi Microsoft Graph API để lấy thông tin người dùng
6. Backend tạo JWT (tuỳ chọn) và trả về cho frontend

---

## 🔧 Cấu hình Azure AD

1. Truy cập: https://portal.azure.com  
2. Vào **Azure Active Directory** > **App registrations** > **New registration**
3. Nhập thông tin:
   - **Name**: `LoginWithMicrosoftApp`
   - **Redirect URI**: `http://localhost:5173/auth/microsoft-callback`
4. Sau khi tạo:
   - Lưu lại `ClientId`, `TenantId`
   - Vào "Certificates & Secrets" → Tạo `ClientSecret`

---

## ⚙️ Cấu hình backend (`appsettings.json`)

```json
"Microsoft": {
  "ClientId": "YOUR_CLIENT_ID",
  "ClientSecret": "YOUR_CLIENT_SECRET",
  "RedirectUri": "http://localhost:5173/auth/microsoft-callback",
  "TenantId": "YOUR_TENANT_ID"
}
