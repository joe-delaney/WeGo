const express = require("express");
const router = express.Router();
const Activity = require('../../models/Activity');

// fetch all activites
router.get('/', (req, res) => {
    Activity.find()
        .sort({ date: -1 })
        .then(activities => res.json(activities))
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
    console.log(req.body.approvedAttendees);
    const newActivity = new Activity({
        title: req.body.title, 
        time: req.body.time, 
        host: req.body.host, 
        requestedAttendees: req.body.requestedAttendees,
        approvedAttendees: req.body.approvedAttendees,
        tag: req.body.tag, 
        location: req.body.location, 
        description: req.body.description, 
        price: req.body.price, 
        duration: req.body.duration, 
        capacity: req.body.capacity
    });
    newActivity.save().then(activity => res.json(activity));
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
                if(req.body.requestedAttendees) activity.requestedAttendees = req.body.requestedAttendees 
                if(req.body.approvedAttendees) activity.approvedAttendees = req.body.approvedAttendees 
                if(req.body.tag) activity.tag = req.body.tag 
                if(req.body.location) activity.location = req.body.location 
                if(req.body.description) activity.description = req.body.description 
                if (req.body.price) activity.price = req.body.price 
                if(req.body.duration) activity.duration = req.body.duration 
                if(req.body.capacity) activity.capacity = req.body.capacity 
                if(req.body.closed) activity.closed = req.body.closed
                activity.save().then(activity => res.json(activity));
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
                activity.remove().then(activity => res.json(activity));
            }
        })
})

module.exports = router;