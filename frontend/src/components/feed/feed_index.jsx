import React from "react";
import NavBarContainer from "../nav/navbar_container";
import ModalContainer from "../modal/modal_container";
import StoryReel from '../feed/storyreel';
import Search from '../search/search'
import './feed.css';

const FeedIndex = () => {

   

    return (
        <>
            <ModalContainer />
            <NavBarContainer />
            <div className="feel__body">
                <Search/>
                
                <StoryReel /> 

            </div>

          


        </>
    )
}

export default FeedIndex;