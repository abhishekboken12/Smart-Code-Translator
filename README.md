# 🤖 Smart Code Translator

An AI-powered full-stack application that translates, analyzes, optimizes, and explains code using Google Gemini AI.

## 🚀 Features

- User registration and login
- Email/password authentication
- Google OAuth authentication
- JWT-protected routes
- Code translation between multiple languages
- Code complexity analysis
- Code optimization suggestions
- AI-powered code explanation
- Operation history
- Delete individual history records
- Clear complete history
- Monaco code editor
- Responsive React interface

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Axios
- Monaco Editor

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Google Auth Library
- Google Gemini AI
- dotenv
- CORS

## 🌐 Supported Languages

- C
- C++
- C#
- Java
- Python

## 📁 Project Structure

```text
smart-code-translator/
│
|--- client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```
## Prerequisites

Make sure you have installed:
- Node.js v20.20.2
- npm 11.12.1
- MongoDB or MongoDB Atlas
- Git
- Google Gemini API key 
- Google OAuth Client ID

## 🔧 Installation

### 1. Clone the repository

```bash
git clone git@github.com:abhishekboken12/Smart-Code-Translator.git
cd smart-code-translator
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 🔐 Environment Variables

Create a .env file inside the server folder:

```bash
PORT=5000
CLIENT_URL=http://localhost:5173

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d

GOOGLE_CLIENT_ID=your_google_client_id

GEMINI_API_KEY=your_gemini_api_key
```

### Frontend Environment Variables

Create a .env file inside the client folder:

```bash
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

### ▶️ Run the Application

Start the backend

```bash
cd server
npm run dev
```

Backend will run on:
```bash
http://localhost:5000
```

Start the frontend

Open another terminal:
```bash
cd client
npm run dev
```

Frontend will run on:
```bash
http://localhost:5173
```





