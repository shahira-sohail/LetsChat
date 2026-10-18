# LetsChat — Real-Time Chat Application

LetsChat is a full-stack real-time chat application built with React, Node.js, Express, and Socket.io. It allows users to join a chat using a temporary username, exchange messages instantly, switch between chat rooms, and see when other users are typing.

## 🚀 Live Demo

**Try LetsChat here:** https://letschat-frontend-8bh3.onrender.com/

The application is deployed on Render.

## ✨ Features

- **Real-Time Messaging:** Send and receive messages instantly using Socket.io.
- **Temporary Usernames:** Join conversations without creating an account.
- **Multiple Chat Rooms:** Choose between General and Tech Support.
- **Message Timestamps:** Each message displays its server-generated time.
- **Typing Indicator:** See when other users are typing.
- **Connection Status:** View the current server connection status.
- **Responsive UI:** A dark, Orbit-inspired interface designed for desktop and mobile screens.
- **Room Isolation:** Messages are delivered to users in the relevant room.

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- CSS
- Socket.io Client

**Backend**
- Node.js
- Express
- Socket.io

**Deployment**
- Render

## 📁 Project Structure

```text
LetsChat/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── socket.js
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```

## 💻 Run Locally

### Prerequisites

- Node.js and npm
- Git
- Visual Studio Code or another code editor
- A modern web browser

### 1. Clone the repository

```bash
git clone https://github.com/shahira-sohail/LetsChat.git
cd LetsChat
```

### 2. Install backend dependencies

Open a terminal in the project root:

```bash
cd server
npm install
```

### 3. Start the backend

```bash
npm run dev
```

The backend runs on port `5000` by default. Keep this terminal running.

### 4. Install frontend dependencies

Open a **second terminal** in the project root:

```bash
cd client
npm install
```

### 5. Start the frontend

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

`http://localhost:5173`

Keep both the frontend and backend running while using the application.

For local development, the frontend uses `http://localhost:5000` by default. For deployment, configure the `VITE_SERVER_URL` environment variable with the backend URL.

## 📖 How to Use

1. Open LetsChat in your browser.
2. Enter a temporary username.
3. Join a chat room.
4. Select General or Tech Support.
5. Send messages and view their timestamps.
6. Open the application in another browser tab with a different username to test real-time messaging.
7. Type a message to test the typing indicator.

## ⚠️ Current Scope and Limitations

- Usernames are temporary; account registration and login are not included.
- Messages are not stored in a database or retained as permanent chat history.
- Only the General and Tech Support rooms are supported.
- Real-time communication requires the backend to be available.

## 🔮 Future Improvements

- User authentication and profiles
- Persistent message history
- Online-user list
- Additional chat rooms

## 📚 Learning Outcomes

This project demonstrates practical experience with:

- Building reusable React interfaces
- Managing frontend state and events
- Client-server communication
- Real-time messaging with Socket.io
- Room-based message delivery
- Server-generated timestamps
- Responsive CSS styling
- Deploying a full-stack application

## 🔗 Links

- **Live Application:** https://letschat-frontend-8bh3.onrender.com/
- **GitHub Repository:** https://github.com/shahira-sohail/LetsChat
- **Backend Service:** https://letschat-backend-uddl.onrender.com
