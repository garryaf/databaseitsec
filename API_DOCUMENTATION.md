# API Documentation - User Login System

## Base URL
```
http://localhost:3000/api/users
```

## Authentication
Semua endpoint yang memerlukan autentikasi menggunakan JWT token yang harus dikirim dalam header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### 1. Register User (Admin Only)
**POST** `/register`

Membuat user baru (hanya admin yang bisa mengakses)

**Headers:**
```
Authorization: Bearer <admin-token>
Content-Type: application/json
```

**Body:**
```json
{
  "username": "john_doe",
  "nama": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "level": "user"
}
```

**Response (201):**
```json
{
  "message": "User berhasil dibuat",
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john_doe",
    "nama": "John Doe",
    "email": "john@example.com",
    "level": "user",
    "createdAt": "2023-12-01T10:00:00.000Z",
    "updatedAt": "2023-12-01T10:00:00.000Z"
  }
}
```

### 2. Login User
**POST** `/login`

Login user dengan username dan password

**Body:**
```json
{
  "username": "john_doe",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login berhasil",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john_doe",
    "nama": "John Doe",
    "email": "john@example.com",
    "level": "user",
    "createdAt": "2023-12-01T10:00:00.000Z",
    "updatedAt": "2023-12-01T10:00:00.000Z"
  }
}
```

### 3. Get Current User Profile
**GET** `/profile`

Mendapatkan profil user yang sedang login

**Headers:**
```
Authorization: Bearer <user-token>
```

**Response (200):**
```json
{
  "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
  "username": "john_doe",
  "nama": "John Doe",
  "email": "john@example.com",
  "level": "user",
  "createdAt": "2023-12-01T10:00:00.000Z",
  "updatedAt": "2023-12-01T10:00:00.000Z"
}
```

### 4. Update User Profile
**PATCH** `/profile`

Update profil user yang sedang login

**Headers:**
```
Authorization: Bearer <user-token>
Content-Type: application/json
```

**Body:**
```json
{
  "nama": "John Smith",
  "email": "johnsmith@example.com"
}
```

**Response (200):**
```json
{
  "message": "Profile berhasil diupdate",
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john_doe",
    "nama": "John Smith",
    "email": "johnsmith@example.com",
    "level": "user",
    "createdAt": "2023-12-01T10:00:00.000Z",
    "updatedAt": "2023-12-01T10:30:00.000Z"
  }
}
```

### 5. Change Password
**PATCH** `/change-password`

Mengubah password user yang sedang login

**Headers:**
```
Authorization: Bearer <user-token>
Content-Type: application/json
```

**Body:**
```json
{
  "currentPassword": "password123",
  "newPassword": "newpassword456"
}
```

**Response (200):**
```json
{
  "message": "Password berhasil diubah"
}
```

### 6. Get All Users (Admin Only)
**GET** `/`

Mendapatkan semua user (hanya admin yang bisa mengakses)

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response (200):**
```json
[
  {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "admin",
    "nama": "Administrator",
    "email": "admin@mitrakeluarga.com",
    "level": "admin",
    "createdAt": "2023-12-01T10:00:00.000Z",
    "updatedAt": "2023-12-01T10:00:00.000Z"
  },
  {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b4",
    "username": "john_doe",
    "nama": "John Doe",
    "email": "john@example.com",
    "level": "user",
    "createdAt": "2023-12-01T10:00:00.000Z",
    "updatedAt": "2023-12-01T10:00:00.000Z"
  }
]
```

### 7. Get User by ID (Admin Only)
**GET** `/:id`

Mendapatkan user berdasarkan ID (hanya admin yang bisa mengakses)

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response (200):**
```json
{
  "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
  "username": "john_doe",
  "nama": "John Doe",
  "email": "john@example.com",
  "level": "user",
  "createdAt": "2023-12-01T10:00:00.000Z",
  "updatedAt": "2023-12-01T10:00:00.000Z"
}
```

### 8. Update User by ID (Admin Only)
**PATCH** `/:id`

Update user berdasarkan ID (hanya admin yang bisa mengakses)

**Headers:**
```
Authorization: Bearer <admin-token>
Content-Type: application/json
```

**Body:**
```json
{
  "nama": "John Smith",
  "email": "johnsmith@example.com",
  "level": "admin"
}
```

**Response (200):**
```json
{
  "message": "User berhasil diupdate",
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john_doe",
    "nama": "John Smith",
    "email": "johnsmith@example.com",
    "level": "admin",
    "createdAt": "2023-12-01T10:00:00.000Z",
    "updatedAt": "2023-12-01T10:30:00.000Z"
  }
}
```

### 9. Delete User by ID (Admin Only)
**DELETE** `/:id`

Menghapus user berdasarkan ID (hanya admin yang bisa mengakses)

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response (200):**
```json
{
  "message": "User berhasil dihapus"
}
```

### 10. Reset Password (Admin Only)
**PATCH** `/:id/reset-password`

Reset password user ke default (hanya admin yang bisa mengakses)

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response (200):**
```json
{
  "message": "Password user john_doe berhasil direset ke: password123",
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "username": "john_doe",
    "nama": "John Doe",
    "email": "john@example.com",
    "level": "user",
    "createdAt": "2023-12-01T10:00:00.000Z",
    "updatedAt": "2023-12-01T10:30:00.000Z"
  }
}
```

## Error Responses

### 400 Bad Request
```json
{
  "message": "Semua field harus diisi"
}
```

### 401 Unauthorized
```json
{
  "message": "Username atau password salah"
}
```

### 403 Forbidden
```json
{
  "message": "Access denied. Admin privileges required."
}
```

### 404 Not Found
```json
{
  "message": "User tidak ditemukan"
}
```

### 500 Internal Server Error
```json
{
  "message": "Terjadi kesalahan server"
}
```

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create admin user:
```bash
npm run create-admin
```

3. Start the server:
```bash
npm start
```

## Default Admin Credentials
- Username: `admin`
- Password: `admin123`

**Important:** Change the default password after first login! 