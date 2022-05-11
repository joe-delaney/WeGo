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
    }
    // {
    //     title: "music",
    //     img: ""
    // },
    // {
    //     title: "shopping",
    //     img: ""
    // },
    // {
    //     title: "late-night",
    //     img: ""
    // },
    // {
    //     title: "travel",
    //     img: ""
    // },
    // {
    //     title: "entertainment",
    //     img: ""
    // },
    // {
    //     title: "food",
    //     img: ""
    // },
    // {
    //     title: "casual",
    //     img: ""
    // }
]

const seedDB = async () => {
    await Tags.deleteMany({});
    await Tags.insertMany(tags);
};

seedDB().then(() => {
    mongoose.connection.close();
});