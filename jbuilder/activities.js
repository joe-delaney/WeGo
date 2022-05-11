const jbuilder = require('jbuilder')

const activityShow = (activity) => {
    return jbuilder.encode(json => {
        json.extract(activity, 'id', 'title', 'time', 'host', 'requestedAttendees', 'approvedAttendees', 'deniedAttendees','tag', 'location', 'description', 'price', 'duration', 'capacity', 'closed');
    })
}

const activityIndex = (activities) => {
    return jbuilder.encode(json => {
        json.extract(activities, 'id', 'title', 'time', 'host', 'requestedAttendees', 'approvedAttendees', 'deniedAttendees','tag', 'location', 'description', 'price', 'duration', 'capacity', 'closed');
    })
}

module.exports = activityShow;
module.exports = activityIndex;