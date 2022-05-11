import React from 'react';
import './profile_photos.css';

class ProfilePhotos extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
         
        return (      
          <div className='profile__photo'>  
            <img src="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg" className="profile__photo--img" />      
            <img src="https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg" className="profile__photo--img" />
            <img src="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg" className="profile__photo--img" />
            <img src="https://previews.123rf.com/images/nd3000/nd30001707/nd3000170700616/82432507-group-of-happy-friends-hang-out-together.jpg" className="profile__photo--img" />
            <img src="https://www.onthebuzz.in/wp-content/uploads/2020/12/OTB-Article-Netflixs-Top-10-Most-Watched-Movies-And-Series-in-2020-banner.jpg" className="profile__photo--img" />
            <img src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/trekking-in-japan-1560935848-785X440.jpg" className="profile__photo--img" />        
              
          </div>
        )
    
      }

}

export default ProfilePhotos;
