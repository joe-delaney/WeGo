import React from 'react';
import './profile_activities.css'

class ProfileActivities extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
          <div className='profile__activties'>
            <div className="profile__activtiy">          
                <div >
                <img src="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div>  
              <div className="profile__activtiy">          
                <div >
                <img src="https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div> 
              <div className="profile__activtiy">          
                <div >
                <img src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/trekking-in-japan-1560935848-785X440.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div> 
              <div className="profile__activtiy">          
                <div >
                <img src="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div> 
              <div className="profile__activtiy">          
                <div >
                <img src="https://www.onthebuzz.in/wp-content/uploads/2020/12/OTB-Article-Netflixs-Top-10-Most-Watched-Movies-And-Series-in-2020-banner.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div> 

          </div>
          
                     
        )
    }

}

export default ProfileActivities;