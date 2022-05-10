
import React from 'react'

function Story({image, profileSrc, title}) {
  return (
    <div style={{backgroundImage: `url(${image})` }} className="story">
        <h4>{title}</h4>
    </div>
  )
}

export default Story