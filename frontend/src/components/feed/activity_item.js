
import React from 'react'

const ActivityItem = ({image, title, openModal, activity}) => {
  let activityId = activity ? activity.id : -1
  let activityImg = activity && activity.tag ? activity.tag.img : "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
  return (
    <div className='activity__item'>
      <div style={{backgroundImage: `url(${activityImg})` }} 
        className="activity"
        onClick={() => openModal("showActivity", activityId)}>   
      </div>
      <div>
          <h4>{title}</h4>
      </div>
    </div>
  )
}

export default ActivityItem