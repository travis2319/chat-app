const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server}=require("socket.io")

app.use(cors());
const server =http.createServer(app);

const io = new Server(server, {
    cors: {
        origon: " htttp://localhost:3000",
        method: ["GET","POST"]
    }
});

io.on("connection", ()=>{
    console.log(socket.id);
socket.on("disconnect",()=>
{
    console.log("User Disconnected",socket.id)
});

});

server.listen(3001, () => {
    console.timeLog("Server Running")
})

