const jbuilder = require('jbuilder')

const userShow = (user) => {
    return jbuilder.encode(json => {
        json.extract(user, 'id', 'email', 'fname', 'lname', 'age', 'pronouns', 'education', 'jobTitle', 'interests');
    })
}

module.exports = userShow;