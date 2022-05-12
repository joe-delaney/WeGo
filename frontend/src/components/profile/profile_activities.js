import React from 'react';
import './profile_activities.css'
import IndexItemActivity from '../activities/index_item_activity'

class ProfileActivities extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        let allActivities = this.props.user ? this.props.user.allActivities.sort((a,b) => a.time > b.time ? 1 : -1) : [];
        return(
          <>
              {allActivities.map((activity, idx) => (
                <IndexItemActivity
                  key={idx}
                  activity={activity}
                  renderClass="profile__activtiy--col"
                  openModal={this.props.openModal}
                />
              ))}
        </>
                     
        )
    }

}

export default ProfileActivities;