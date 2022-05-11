import React from 'react'
import * as DateUtil from "../../util/date_util";

const IndexItemActivity = ({image, activity, renderClass, openModal}) => {
    
    let title = activity ? activity.title : "";
    let activityTime = activity ? activity.time : "";
    let activityDate = activityTime ? DateUtil.convertToDate(activityTime) : "";
    let location = activity ? activity.location : "";
    let activityImg = activity && activity.tag ? activity.tag.img : "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"

    return (
            <>
               <div className={renderClass} onClick={() => openModal("showActivity", activity._id)}>          
                    <div >
                        <img src={activityImg} className='profile__activtiy--img' /> 
                    </div>
                    <div className='profile__activtiy--info'>
                        <p>{title}</p>
                        <p>{`${activityDate}`}</p>
                        <p>{location}</p>
                    </div>   
              </div>  
              
            </>
        )
}

export default IndexItemActivity