import React from 'react'
import * as DateUtil from "../../util/date_util";

const IndexItemActivity = ({image, activity, renderClass, openModal}) => {
    
    let title = activity ? activity.title : "";
    let activityTime = activity ? activity.time : "";
    let activityDate = activityTime ? DateUtil.convertToDate(activityTime) : "";
    let location = activity ? activity.location : "";

    return (
            <>
               <div className={renderClass} onClick={() => openModal("showActivity", activity._id)}>          
                    <div >
                        <img src={image} className='profile__activtiy--img' /> 
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