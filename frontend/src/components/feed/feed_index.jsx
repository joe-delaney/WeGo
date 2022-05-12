import React from "react";
import NavBarContainer from "../nav/navbar_container";
import ModalContainer from "../modal/modal_container";
import ActivityFeed from './activity_feed';
import SearchBar from '../search/search_bar';
import Feature from '../feature/feature';
import Footer from '../footer/footer'
import './feed.css';

const FeedIndex = ({activities, fetchActivities, openModal, loggedIn, history}) => {
    return (
        <>        
            <ModalContainer />
            <NavBarContainer />
            <div className="feel__body">
                <SearchBar
                    history={history}
                />
                <ActivityFeed 
                    fetchActivities={fetchActivities} 
                    activities={activities}
                    openModal={openModal}
                    loggedIn={loggedIn}/> 
                <Feature />              

            </div>
            <div className="message">
                <img src="https://icon-library.com/images/android-text-message-icon/android-text-message-icon-10.jpg" className="message_img" />
            </div>
            <Footer />
        </>
    )
}

export default FeedIndex;