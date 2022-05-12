const express = require("express");
const mongoose = require('mongoose');
const User = require('./models/User');
const Activity = require('./models/Activity');
const ChatGroup = require('./models/ChatGroup');
const Message = require('./models/Message');
const users = require("./routes/api/users");
const images = require("./routes/api/images");
const activities = require("./routes/api/activities")
const chatgroups = require("./routes/api/chat_groups")
const messages = require("./routes/api/messages")
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}


// MongoDB
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use("/api/users", users);
app.use("/api/images", images)
app.use("/api/activities", activities);
app.use("/api/chatgroups", chatgroups);
app.use("/api/messages", messages);

// Server
const port = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('join', function(room) {
    console.log(`User has joined room ${room}`)
    socket.join(room)
  });
  socket.on('message', function(rooms) {
    console.log(`User has sent a message to ${rooms}`)
    io.to(rooms).emit('message')
  })
  socket.on('leave', function(room) {
    console.log(`User has left room ${room}`)
    socket.leave(room)
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => console.log(`Server is running on port ${port}`));