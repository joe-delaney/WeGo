
import React from 'react';
import { Link } from 'react-router-dom';
import './profile_photos.css';


class ProfileAbout extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        let jobTitle = this.props.user && this.props.user.jobTitle ? (
            <li  className="nav__item">
                <strong>Job title: </strong>
                <p>{this.props.user.jobTitle}</p>
            </li>
        ) : <div></div>

        let location = this.props.user && this.props.user.location ? (
            <li  className="nav__item">
                <strong>Based in: </strong>
                <p>{this.props.user.location}</p>
            </li>
        ) : <div></div>

        let education = this.props.user && this.props.user.education ? (
            <li  className="nav__item">
                <strong>Education: </strong>
                <p>{this.props.user.education}</p>
            </li>
        ) : <div></div>

        let aboutMe = this.props.user ? <p>{this.props.user.aboutMe}</p> : <p>Tell everyone more about you!</p>;

        let editButton = this.props.user && (this.props.user.id === this.props.currentUserId) ?
            (
                <div className='profile__about--edit'>
                    <button onClick={() => this.props.openModal("editProfile")} className='btn btn--accent btn--small'>Edit Profile</button>
                </div>
            ) : <div></div>

        return(
            <div className='profile__about'>
                    <div className='profile__about--left'>
                        {editButton} 
                        <ul className="list">
                            {location}
                            {jobTitle}
                            {education}
                        </ul>
                        {aboutMe}
                                   

                    </div>

            <div className='profile__about--right'>
            <div className="profile__activtiy--col">          
                <div >
                <img src="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div>  
              <div className="profile__activtiy--col">          
                <div >
                <img src="https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div> 
              <div className="profile__activtiy--col">          
                <div >
                <img src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/trekking-in-japan-1560935848-785X440.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div> 
              <div className="profile__activtiy--col">          
                <div >
                <img src="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div> 
              <div className="profile__activtiy--col">          
                <div >
                <img src="https://www.onthebuzz.in/wp-content/uploads/2020/12/OTB-Article-Netflixs-Top-10-Most-Watched-Movies-And-Series-in-2020-banner.jpg" className='profile__activtiy--img' /> 
                </div>
                <div className='profile__activtiy--info'>
                    <p>05/20/202</p>
                    <p>app Academy graduation</p>
                </div>         
                  
              </div> 

            </div>
            </div>
        )
    }

}

export default ProfileAbout;