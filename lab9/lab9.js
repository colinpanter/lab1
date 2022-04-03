//Ne pas oublier de faire npm install et npm start si tu veux tester :)
const express = require('express'); 
const app = express(); 
const http = require('http');
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)

app.use(express.static(__dirname + '/css'));


app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/lab9.html');
});

io.on('connection', (socket) => {
    console.log('New user connected!');

    socket.on('disconnect', () => {
        console.log('User disconnected!');
    });

    socket.on('chat message', (payload) => {
        io.emit('chat message', payload);
    });
});

server.listen(3000, () => {
    console.log('Listening on localhost:3000');
});
