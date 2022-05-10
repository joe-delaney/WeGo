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

// fetch all activities for a specific user
router.get('/user/:user_id/', (req, res) => {
    Activity.find({ user: req.params.user_id })
        .then(activities => res.json(activities))
        .catch(err => res.status(404).json({ noactivitiesfound: 'No activities found' }));
});

// create an activity
router.post("/", (req, res) => {
    const newActivity = new Activity({
        title: req.body.title, 
        time: req.body.time, 
        host: req.body.host, 
        requestedAttendees: req.body.requestedAttendees, 
        approvedAttendees: req.body.approvedAttendees, 
        tags: req.body.tags, 
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
                if(req.body.title) title = req.body.title 
                if(req.body.time) time = req.body.time 
                if(req.body.host) host = req.body.host 
                if(req.body.requestedAttendees) requestedAttendees = req.body.requestedAttendees 
                if(req.body.approvedAttendees) approvedAttendees = req.body.approvedAttendees 
                if(req.body.tags) tags = req.body.tags 
                if(req.body.location) location = req.body.location 
                if(req.body.description) description = req.body.description 
                if(req.body.price) price = req.body.price 
                if(req.body.duration) duration = req.body.duration 
                if(req.body.capacity) capacity = req.body.capacity 
                if(req.body.closed) closed = req.body.closed
                activity.save().then(activity => res.json(activity));
            }
        })
})

// delete an activity
router.delete("/:id", (req, res) => {
    Activity.findByIdAndDelete(id, err => {
        if (err) return res.status(404).json({ noactivityfound: "No activity found with that ID" });
        return res.status(200);
    });
})