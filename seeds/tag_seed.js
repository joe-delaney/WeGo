const mongoose = require("mongoose");
const Tags = require('../models/Tag');
const db = require('../config/keys').mongoURI;


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const tags = [
    {
        title: "sports",
        img: "https://stmaryfc.org/wp-content/uploads/2018/02/Sports-Balls.jpg"
    },
    {
        title: "education",
        img: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
    },
    {
        title: "relaxing",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpt-rKMthwcIAUbiZikKFJhFFDCJdOTkop9g&usqp=CAU"
    },
    {
        title: "music",
        img: "https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg"
    },
    {
        title: "shopping",
        img: "https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
    },
    {
        title: "late-night",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCiITr7SCc6pPDdvuKmdKzeuu7vo3uZfj4w&usqp=CAU"
    },
    {
        title: "travel",
        img: "https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg"
    },
    {
        title: "entertainment",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtcDt9X-HeMsuWpjjl-nK4Yo4stYF4_dijg&usqp=CAU"
    },
    {
        title: "food",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmp-CfQ-albJX7ez9aZxkJ6Pbr-eZj3r5cA&usqp=CAU"
    },
    {
        title: "casual",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHtTRfRmet4QKgJo5NyxuzlqxYdRJQEuOWQ&usqp=CAU"
    }
]

const seedDB = async () => {
    await Tags.deleteMany({});
    await Tags.insertMany(tags);
};

seedDB().then(() => {
    mongoose.connection.close();
});