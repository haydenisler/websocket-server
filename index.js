const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');
// const formatMessage = require('./helpers/formatDate')

io.on('connection', (socket) => { 
    socket.on('joinRoom', () => {
        console.log('User has joined the room!')

        socket.emit('message', { 
            message: 'Hello from the server!'
        });
    });
 });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

server.listen(3000);