import React from 'react';
import { Link } from 'react-router-dom'
import './profile.css'
import ModalContainer from "../modal/modal_container";
import NavBarContainer from "../nav/navbar_container";
import ProfileNavBar from "./profile_navbar"
import ProfileFeed from "./profile_feed"

import './profile.css'

class Profile extends React.Component {
    constructor(props) {
      super(props);

    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        return(
            <>
                <ModalContainer />
                <NavBarContainer />
                <ProfileNavBar user={this.props.user}/>
                <ProfileFeed user={this.props.user}/>
            </>
        )
    }
}

export default Profile;

