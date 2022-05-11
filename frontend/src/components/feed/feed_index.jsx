import React from "react";
import NavBarContainer from "../nav/navbar_container";
import ModalContainer from "../modal/modal_container";
import ActivityFeed from './activity_feed';
import Search from '../search/search';
import Feature from '../feature/feature';
import './feed.css';

const FeedIndex = ({activities, fetchActivities, openModal, loggedIn}) => {
    return (
        <>
                       
            <ModalContainer />
            <NavBarContainer />
            <div className="feel__body">
                <Search/>
                <ActivityFeed 
                    fetchActivities={fetchActivities} 
                    activities={activities}
                    openModal={openModal}
                    loggedIn={loggedIn}/> 
                <Feature />
            </div>
        </>
    )
}

export default FeedIndex;