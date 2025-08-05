const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 4005;

const router = require("./router");

const app = express();

const server = http.createServer(app);

const io = socketio(server,{
    cors: {
        origin: "*"
    }
});

var now = new Date();

io.on("connection", (socket) => {
    console.log("Nueva conexión a las: " + now.toLocaleTimeString())
    socket.on('insertar',(usuario) => {
        console.log("Se ejecuto a las: " + now.toLocaleTimeString());
        console.log(usuario);
        socket.broadcast.emit("insert", usuario + now.toLocaleTimeString());
    });
    socket.on('eliminar', (id) => {
        console.log("Se ejecuto a las: " + now.toLocaleTimeString());
        console.log(id);
        socket.broadcast.emit("delete", id+now.toLocaleTimeString());
    });
    socket.on('disconnect', () => {
        console.log("Se desconecto a las: " + now.toLocaleTimeString());
    });
});

app.use(router);

server.listen(PORT, () => {
    console.log(`el socket fue iniciado en el puerto ${PORT}`);
});

