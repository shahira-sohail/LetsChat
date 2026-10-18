const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
    },
});

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    socket.on("chatMessage", (text) => {
        const username = socket.data.username;
        const room = socket.data.room;
        if(!username || !room || typeof text !== "string" || !text.trim()){
            return;
        }

        const chatMessage = {
            text: text.trim(),
            sender: username,
            time: new Date().toISOString(),
            room,
        };
        console.log("Message recieved:", chatMessage);
        io.to(room).emit("chatMessage", chatMessage);
    });

    socket.on("setUsername", (username) => {
        if(typeof username !== "string" || !username.trim()){
            return;
        }
        socket.data.username = username.trim();
        console.log("Username assigned:", socket.data.username);
    });

    socket.on("joinRoom", (room) => {
        const allowedRooms = ["General", "Tech Support"];
        if(!allowedRooms.includes(room)){
            return;
        }
        if(socket.data.room){
            socket.leave(socket.data.room);
        }
        socket.join(room);
        socket.data.room = room;
        console.log(`${socket.data.username || "Guest"} joined ${room}`);
    });

    socket.on("typing", (isTyping) => {
        const username = socket.data.username;
        const room = socket.data.room;
        if(!username || !room){
            return;
        }
        socket.to(room).emit("typing", {
            username,
            isTyping: Boolean(isTyping),
        });
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });
});

httpServer.listen(5000, () => {
    console.log("LetsChat backend running on port 5000");
});

//cd server
//npx nodemon server.js 