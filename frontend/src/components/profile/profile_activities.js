import React from 'react';
import './profile_activities.css'
import IndexItemctivity from '../activities/index_item_activity'

class ProfileActivities extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
          <>
          
            <div className='profile__activties'>
              <IndexItemctivity 
                  image="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg"
                  titile ="Shopping"
                  date = "05/20/202"
                  Location =" NYC"  
                  renderClass="profile__activtiy"                
                />
                <IndexItemctivity 
                  image="https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg"
                  titile ="Shopping"
                  date = "05/20/202"
                  Location =" NYC"
                  renderClass="profile__activtiy"  
                />
                  <IndexItemctivity 
                  image="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/trekking-in-japan-1560935848-785X440.jpg"
                  titile ="Shopping"
                  date = "05/20/202"
                  Location =" NYC"
                  renderClass="profile__activtiy"  
                />

                <IndexItemctivity 
                  image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                  titile ="Shopping"
                  date = "05/20/202"
                  Location =" NYC"
                  renderClass="profile__activtiy"  
                />
            </div>
          
        </>
                     
        )
    }

}

export default ProfileActivities;