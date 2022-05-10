import React from 'react'
import Story from './story'
import './storyreel.css'

function StoryReel() {
  return (
    <div className='storyreel'>
        {/* <Story 
            image=""
            profileSrc="Add Story"
            title="a/A Student"
        /> */}
        <Story 
            image="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg"
            profileSrc=""
            title="Music"
        />
        {/* <Story 
            image="https://smashgadget.com/wp-content/uploads/2021/07/laptop-for-movies.jpg"
            profileSrc=""
            title="Movie"
        /> */}
         <Story 
            image="https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg"
            profileSrc=""
            title="Traveling"
        />
         <Story 
            image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
            profileSrc=""
            title="Shopping"
        />

        
    </div>
  )
}

export default StoryReel;