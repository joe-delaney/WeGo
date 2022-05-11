
import React from 'react'

const ActivityItem = ({image, title, openModal, activity}) => {
  let activityId = activity ? activity.id : -1
  return (
    <div className='activity__item'>
      <div style={{backgroundImage: `url(${image})` }} 
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