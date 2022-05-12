const express = require("express");
const mongoose = require('mongoose');
const User = require('./models/User');
const Activity = require('./models/Activity');
const ChatGroup = require('./models/ChatGroup');
const Message = require('./models/Message');
const users = require("./routes/api/users");
const images = require("./routes/api/images");
const activities = require("./routes/api/activities")
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

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

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

