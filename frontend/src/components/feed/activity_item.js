
import React from 'react'

const ActivityItem = ({image, title}) => {
  return (
    <div className='activity__item'>
      <div style={{backgroundImage: `url(${image})` }} className="activity">
          
      </div>
      <div>
          <h4>{title}</h4>
      </div>
    </div>
  )
}

export default ActivityItem