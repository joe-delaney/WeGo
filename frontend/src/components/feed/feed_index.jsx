import React from "react";
import NavBarContainer from "../nav/navbar_container";
import ModalContainer from "../modal/modal_container";
import StoryReel from '../feed/storyreel';
import Search from '../search/search'
import './feed.css';

const FeedIndex = () => {

   

    return (
        <>
            <img src="/api/images/8aa0da454b44767e9237492bc0ba1c7f" alt="test"/>
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

// 8aa0da454b44767e9237492bc0ba1c7f