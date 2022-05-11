const jbuilder = require('jbuilder')

const userShow = (user) => {
    return jbuilder.encode(json => {
        json.extract(user, 'id', 'email', 'fname', 'lname', 'age', 'pronouns', 'education', 'jobTitle', 'interests', 'aboutMe', 'location', 'profilePhotoPath', 'hostedActivities', 'allActivities', 'attendedActivities');
    })
}

module.exports = userShow;