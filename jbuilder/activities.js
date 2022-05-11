const jbuilder = require('jbuilder')
const User = require('../models/User');

const activityShow = (activity) => {
    return jbuilder.encode(json => {
        json.extract(activity, 'id', 'title', 'time', 'host', 'requestedAttendees', 'approvedAttendees', 'deniedAttendees','tag', 'location', 'description', 'price', 'duration', 'capacity', 'closed');
        
        activity.approvedAttendees.forEach((id) => {
            User.findById(id)
                .then(user => console.log(user))
        })
        
    })
}

const activityIndex = (activities) => {
    return jbuilder.encode(json => {
        json.extract(activities, 'id', 'title', 'time', 'host', 'requestedAttendees', 'approvedAttendees', 'deniedAttendees','tag', 'location', 'description', 'price', 'duration', 'capacity', 'closed');
    })
}

module.exports = activityShow;
module.exports = activityIndex;