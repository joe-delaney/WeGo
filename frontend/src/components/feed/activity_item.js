
import React from 'react'

const ActivityItem = ({image, title, openModal, activity}) => {
  let activityId = activity ? activity.id : -1
  return (
    <div 
      style={{backgroundImage: `url(${image})` }} 
      className="story"
      onClick={() => openModal("showActivity", activityId)}>
        <h4>{title}</h4>
    </div>
  )
}

export default ActivityItem