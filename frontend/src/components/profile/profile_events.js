import React from 'react';



class ProfileEvents extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
            <div className='profile__events'>
              No events attended yet.
            </div>
        )
    }

}

export default ProfileEvents;