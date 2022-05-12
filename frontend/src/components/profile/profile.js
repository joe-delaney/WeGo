import React from 'react';
import './profile.css'
import ModalContainer from "../modal/modal_container";
import NavBarContainer from "../nav/navbar_container";
import ProfileNavBar from "./profile_navbar"
import ProfileFeed from "./profile_feed"

class Profile extends React.Component {
    constructor(props) {
      super(props);

    }

    componentDidMount() {
        console.log("mounted")
        this.props.fetchUser(this.props.match.params.userId)
        if(!this.props.activitiesFetched) {
            this.props.fetchActivities();
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.userId !== this.props.match.params.userId &&
            !this.props.user) {
            this.props.fetchUser(this.props.match.params.userId)
        }
    }

    render() {
        return(
            <>
                <ModalContainer />
                <NavBarContainer />
                <ProfileNavBar 
                    user={this.props.user}
                    currentUserId={this.props.currentUserId}
                    openModal={this.props.openModal}
                    />
                <ProfileFeed 
                    user={this.props.user}
                    currentUserId={this.props.currentUserId}
                    openModal={this.props.openModal}
                    />
            </>
        )
    }
}

export default Profile;

