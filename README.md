# LetsChat — Real-Time Chat Application

LetsChat is a real-time chat application built with React, Node.js, Express and Socket.io. It allows users to join a chat using a temporary username, exchange messages instantly, switch between chat rooms and see when other users are typing.

## Features

- **Real-time messaging:** Send and receive messages instantly using Socket.io.
- **Temporary usernames:** Join a conversation without creating an account.
- **Multiple chat rooms:** Choose between General and Tech Support.
- **Message timestamps:** Each message displays its server-generated time.
- **Typing indicator:** See when other users are typing.
- **Connection status:** View the current server connection status.
- **Responsive UI:** A dark Orbit-inspired interface designed for desktop and mobile screens.
- **Room isolation:** Messages are delivered to users in the relevant room.

## Tech Stack

**Frontend**
- React
- Vite
- CSS
- Socket.io Client

**Backend**
- Node.js
- Express
- Socket.io

## Project Structure

```text
LetsChat/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── socket.js
│   └── package.json
├── server/
│   ├── server.js
│   └── package.json
└── README.md
```

*Note: This structure highlights the main files. Other files and folders may also be present.*

## Prerequisites

- Node.js and npm
- A code editor such as Visual Studio Code
- A modern web browser

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd LetsChat
```

Replace `YOUR_REPOSITORY_URL` with your actual Git repository URL.

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Start the backend server

```bash
npm run dev
```

If your `server/package.json` does not define a `dev` script, use the start command configured in that file instead.

The backend is expected to run on port `5000`.

Keep this terminal running.

### 4. Install frontend dependencies

Open a second terminal from the `LetsChat` root folder:

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

## How to Use

1. Open LetsChat in your browser.
2. Enter a temporary username and join the chat.
3. Select General or Tech Support.
4. Send messages and view their timestamps.
5. Open the application in a second browser tab with a different username to test real-time messaging.
6. Type a message to test the typing indicator.

## Current Scope and Limitations

- Usernames are temporary; there is no account registration or login.
- Messages are not persisted in a database and are not retained as chat history after the relevant session or page state is lost.
- Only the available General and Tech Support rooms are supported.
- A running backend server is required for real-time communication.

## Future Improvements

Potential future enhancements include user authentication, persistent message history, online-user lists and additional chat rooms.

## Learning Outcomes

This project demonstrates practical use of React state and effects, client-server communication, Socket.io events, room-based messaging, server-generated timestamps and responsive CSS styling.
