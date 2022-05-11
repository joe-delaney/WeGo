import React from 'react';
import './profile_activities.css'
import IndexItemActivity from '../activities/index_item_activity'

class ProfileActivities extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      let allActivities = this.props.user ? this.props.user.allActivities : [];

        return(
          <>
            <div className='profile__activties'>
              {allActivities.map((activity, idx) => (
                <IndexItemActivity
                  image="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg"
                  key={idx}
                  activity={activity}
                  renderClass="profile__activtiy"
                  openModal={this.props.openModal}
                />
              ))}
              {/* <IndexItemActivity 
                  image="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg"
                  titile ="Shopping"
                  date = "05/20/202"
                  Location =" NYC"  
                  renderClass="profile__activtiy"                
                />
                <IndexItemActivity 
                  image="https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg"
                  titile ="Shopping"
                  date = "05/20/202"
                  Location =" NYC"
                  renderClass="profile__activtiy"  
                />
                  <IndexItemActivity 
                  image="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/trekking-in-japan-1560935848-785X440.jpg"
                  titile ="Shopping"
                  date = "05/20/202"
                  Location =" NYC"
                  renderClass="profile__activtiy"  
                />

                <IndexItemActivity 
                  image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                  titile ="Shopping"
                  date = "05/20/202"
                  Location =" NYC"
                  renderClass="profile__activtiy"  
                /> */}
            </div>
          
        </>
                     
        )
    }

}

export default ProfileActivities;