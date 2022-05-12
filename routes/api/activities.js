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

router.put('/search', async (req, res) => {

    //Find tag Id if a tag title was passed in
    let tagId = undefined;
    if(req.body.tag) await Tag.findOne({title: req.body.tag}).then(tag => tagId = tag._id);

    //Create filters object based on passed in params
    const searchObj = {closed: false};
    if (tagId) searchObj.tag = tagId;
    if(req.body.price) searchObj.price = { $lte: parseInt(req.body.price)} ;
    if (req.body.duration) searchObj.duration = { $lte: parseInt(req.body.duration) };
    const filters = { $or: [searchObj] }

    //Create searchBarObj for query passed in  
    let searchBarArr = []
    let searchBarObj = undefined;
    if (req.body.title) {
        const words = req.body.title.trim().split(' ').filter( word => word.length > 2)
        searchBarArr = words.map( word => {     
            return {
                'title': { $regex: new RegExp(word, 'i') }
            }   
            //[
            // {'tag.title': { $regex: `/${word}/`, $options: 'i'}}
            // ]
        })
        searchBarObj = { $or: searchBarArr}
    }

    //Combine filters and searchBarObj
    let combinedSearchObj;
    (searchBarObj) ? combinedSearchObj = { $and: [searchBarObj, filters] } : combinedSearchObj = filters

    Activity.find(combinedSearchObj).populate('tag')
        .sort({ date: -1 })
        .then(activities => res.json(activities.map(activity => activity._id)))
        .catch(err => res.status(404).json({ noactivitiesfound: 'No activities found' }));
});

module.exports = router;