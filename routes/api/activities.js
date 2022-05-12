const express = require("express");
const router = express.Router();
const Activity = require('../../models/Activity');
const Tag = require('../../models/Tag');
const activityShow = require('../../jbuilder/activities');
const activityIndex = require('../../jbuilder/activities');

// fetch all activites
router.get('/', (req, res) => {
    Activity.find()
        .populate("approvedAttendees", ["id", "fname", "lname", "profilePhotoPath"])
        .populate("host", ["id", "fname", "lname", "profilePhotoPath"])
        .populate("deniedAttendees", ["id", "fname", "lname", "profilePhotoPath"])
        .populate("requestedAttendees", ["id", "fname", "lname", "profilePhotoPath"])
        .populate("tag")
        .sort({ date: -1 })
        .then(activities => res.json(JSON.parse(activityIndex(activities))))
        .catch(err => res.status(404).json({ noactivitiesfound: 'No activities found' }));
});

// fetch all activities hosted by a specific user
router.get('/user/:userId/', (req, res) => {
    Activity.find({ host: req.params.userId })
        .then(activities => res.json(activities))
        .catch(err => res.status(404).json({ noactivitiesfound: 'No activities found' }));
});

// create an activity
router.post("/", (req, res) => {
    Tag.findOne({ title: req.body.tag }).then(tag => {
        const newActivity = new Activity({
            title: req.body.title,
            time: req.body.time,
            host: req.body.host,
            requestedAttendees: req.body.requestedAttendees,
            approvedAttendees: [req.body.host],
            tag: tag._id,
            location: req.body.location,
            description: req.body.description,
            price: req.body.price,
            duration: req.body.duration,
            capacity: req.body.capacity
        });
        newActivity.save().then(activity => Activity.findById(activity.id)
            .populate("host", ["id", "fname", "lname", "profilePhotoPath"])
            .populate("tag")
            .populate("approvedAttendees", ["id", "fname", "lname", "profilePhotoPath"])
            .then(activity => res.json(JSON.parse(activityShow(activity)))));
    })

});

// update an activity
router.post("/:id", (req, res) => {
    Activity.findById(req.params.id)
        .then(activity => {
            if (!activity) {
                return res.status(404).json({ noactivityfound: "No activity found with that ID" })
            } else {
                if(req.body.title) activity.title = req.body.title 
                if (req.body.time) activity.time = req.body.time 
                if (req.body.host) activity.host = req.body.host 
                if (req.body.requestedAttendee) activity.requestedAttendees.push(req.body.requestedAttendee) 
                if(req.body.approvedAttendee) {
                    activity.approvedAttendees.push(req.body.approvedAttendee);
                    activity.requestedAttendees.remove(req.body.approvedAttendee);
                }
                if(req.body.deniedAttendee) {
                    activity.deniedAttendees.push(req.body.deniedAttendee);
                    activity.requestedAttendees.remove(req.body.deniedAttendee);
                }
                if(req.body.tag) activity.tag = req.body.tag 
                if(req.body.location) activity.location = req.body.location 
                if(req.body.description) activity.description = req.body.description 
                if (req.body.price) activity.price = req.body.price 
                if(req.body.duration) activity.duration = req.body.duration 
                if(req.body.capacity) activity.capacity = req.body.capacity 
                if(req.body.closed) activity.closed = req.body.closed
                activity.save().then(activity => Activity.findById(activity.id)
                    .populate("approvedAttendees", ["id", "fname", "lname", "profilePhotoPath"])
                    .populate("host", ["id", "fname", "lname", "profilePhotoPath"])
                    .populate("deniedAttendees", ["id", "fname", "lname", "profilePhotoPath"])
                    .populate("requestedAttendees", ["id", "fname", "lname", "profilePhotoPath"]) 
                    .populate("tag")
                    .then(activity => res.json(JSON.parse(activityShow(activity)))));
            }
        })
})

// delete an activity
router.delete("/:id", (req, res) => {
    Activity.findById(req.params.id)
        .then(activity => {
            if (!activity) {
                return res.status(404).json({ noactivityfound: "No activity found with that ID" })
            } else {
                activity.remove().then(activity => res.json(JSON.parse(activityShow(activity))));
            }
        })
})

router.get('/search', (req, res) => {
    console.log(req.body);

    const searchObj = {};
    // figure out search by key word.
    // split the search terms into multiple things.
    // if(req.body.title) searchObj.title = req.body.title;
    if(req.body.time) searchObj.time = req.body.time;
    // if(req.body.host) searchObj.host = req.body.host;
    // if(req.body.approvedAttendees) searchObj.approvedAttendees = req.body.approvedAttendees;
    if (req.body.tag) searchObj.tag = req.body.tag;
    // if(req.body.description) searchObj.description = req.body.description;
    // take care of price. Strictly less than relation.
    // {$lt:25}}
    if(req.body.price) searchObj.price = {$lt: parseInt(req.body.price) + 1};
    // needs to be a range of some kind. Strictly less than relation
    if(req.body.duration) searchObj.duration = {$lt: parseInt(req.body.duration) + 1};
    // if(req.body.capacity) searchObj.capacity = req.body.capacity;
    if (req.body.location) searchObj.location = req.body.location;
    searchObj.closed = false;



// {
//     $search: {
//         "index": "<index-name>",
//         "<operator-name>"|"<collector-name>": {
//           <operator-specification>|<collector-specification>
//         }
//     }
// }
    searchObj =  { $search: { title: "Shopping" } }

    // searchObj = { $search: {
    //     "title"
    // }}
    // db.supplies.runCommand("text", {search:"printer ink"})
    console.log(searchObj);

    // title, location, date
    // Activity.find( {price: {$lt: 1}} )

    // searchObj = { tag: '627c61cf8e02aa78f0992aac' }
    Activity.find(searchObj)
        .populate("tag")
        .sort({ date: -1 })
        .then(activities => res.json(activities))
        .catch(err => res.status(404).json({ noactivitiesfound: 'No activities found' }));
});

module.exports = router;