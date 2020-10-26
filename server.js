const io = require('socket.io')(3000)

io.on('connection', (socket) => {

    console.log('a user connected');
    socket.emit('message', 'Hello world');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chatmessage', msg => {
        // socket.broadcast.emit('message', msg);
        // socket.emit('message', msg);
        io.emit('message', msg)


    })
});