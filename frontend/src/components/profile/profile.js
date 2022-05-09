import React from 'react';
import { Link } from 'react-router-dom'
import './profile.css'
import ModalContainer from "../modal/modal_container";
import NavBarContainer from "../nav/navbar_container";
import ProfileNavBar from "./profile_navbar"


class Profile extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        return(
            <>
                <ModalContainer />
                <NavBarContainer />
                <ProfileNavBar />
            </>
        )
    }
}

export default Profile;

