import React from 'react'
import * as DateUtil from "../../util/date_util";

const IndexItemActivity = ({ activity, renderClass, openModal}) => {
    
    let activityImg = activity ? activity.tag.img : "";
    let activityTitle = activity ? activity.title : "";
    let activityTime = activity ? activity.time : "";
    let activityDate = activityTime ? DateUtil.convertToDate(activityTime) : "";
    let activityTimeLabel = activityTime ? DateUtil.convertToTime(activityTime) : "";
    let activityLocation = activity ? activity.location : "";
    let activityAttendees = activity ? activity.approvedAttendees.length : 0;
    let attendeesLabel = activityAttendees === 1 ? "attendee" : "attendees";

    return (
            <>
               <div className={renderClass} onClick={() => openModal("showActivity", activity._id)}>          
                    <div >
                        <img src={activityImg} className='profile__activtiy--img' /> 
                    </div>
                    <div className='profile__activtiy--info'>
                        <div className="search-result-contents-top">
                            <strong className="search-result-date">{`${activityDate} at ${activityTimeLabel}`}</strong>
                            <strong className="search-result-title">{activityTitle}</strong>
                            <span className="search-result-location">{activityLocation}</span>
                            <span onClick={() => openModal("showActivity", activity.id)} className="search-see-more-info">See more info</span>
                        </div>
                        <div className="search-result-contents-bottom">
                            <span className="search-result-attendees">{`${activityAttendees} ${attendeesLabel}`}</span>
                        </div>
                    </div>   
              </div>  
              
            </>
        )
}

export default IndexItemActivity