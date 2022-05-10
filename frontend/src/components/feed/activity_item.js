
import React from 'react'

const ActivityItem = ({image, title}) => {
  return (
    <div style={{backgroundImage: `url(${image})` }} className="story">
        <h4>{title}</h4>
    </div>
  )
}

export default ActivityItem