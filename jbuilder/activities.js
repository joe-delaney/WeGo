const jbuilder = require('jbuilder')

const activityShow = (activity) => {
    return jbuilder.encode(json => {
        json.extract(activity, 'id', 'title', 'time', 'host', 'requestedAttendees', 'approvedAttendees', 'tag', 'location', 'description', 'price', 'duration', 'capacity', 'closed');
    })
}

module.exports = activityShow;