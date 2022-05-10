import React from 'react';



class ProfileActivities extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
            <div className='profile__events'>
              No activities attended yet.
            </div>
        )
    }

}

export default ProfileActivities;