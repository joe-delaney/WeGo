
import React from 'react'

const ActivityItem = ({image, title, openModal}) => {
  return (
    <div 
      style={{backgroundImage: `url(${image})` }} 
      className="story"
      onClick={() => openModal("showActivity")}>
        <h4>{title}</h4>
    </div>
  )
}

export default ActivityItem