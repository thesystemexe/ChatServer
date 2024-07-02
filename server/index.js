const express = require('express');
const app = express();
const http = require("http");
const cors = require('cors');
const { log } = require('console');
const {Server} = require("socket.io");


app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET", "POST"]
    }
});

io.on("connection",(socket)=>{
    console.log(`User Connected : ${socket.id}`);

    socket.on("join_room",(data)=>{
        socket.join(data);
        console.log(`User Connected: ${socket.id} joined room: ${data}` );
    })

    socket.on("disconnect",()=>{
        console.log("User disconnected" , socket.id);
    })

});


server.listen(3005,()=>{
    console.log("Server is running");
});
