import React from "react";
import NavBarContainer from "../nav/navbar_container";
import ModalContainer from "../modal/modal_container";
import StoryReel from './storyreel';
import Search from '../search/search'
import './feed.css';

const FeedIndex = ({activities, fetchActivities, openModal, loggedIn}) => {
    return (
        <>
            {/* <img src="/api/images/8aa0da454b44767e9237492bc0ba1c7f" alt="test"/> */}
            <ModalContainer />
            <NavBarContainer />
            <div className="feel__body">
                <Search/>
                <StoryReel 
                    fetchActivities={fetchActivities} 
                    activities={activities}
                    openModal={openModal}
                    loggedIn={loggedIn}/> 
            </div>
        </>
    )
}

export default FeedIndex;