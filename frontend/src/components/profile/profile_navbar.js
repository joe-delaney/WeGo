import React from 'react';
import { Link } from 'react-router-dom'
import './profile.css'


class ProfileNavBar extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        return(
         <>
            {/* <div className='profile__top'> 
                <div className="profile__coverpotp" >
                    <div className="profile__coverbar" >
                    </div>
                </div>
            </div> */}

            <div className='profile__header'>
                <div className='profile__img'>
                     <img src="https://play-lh.googleusercontent.com/A0-PfglKcDNywPiJMlbqSUMkZWKBQPAeklY6ObjnOFTNrcGX-4Re6FhIcrdmo7NkruFd"
                    className="profile__useravatar"/>
                </div>
                <div className='profile__userinfo'>
                        <div className='profile__userinfo--heading'>
                            <h1>Demo User</h1>
                            <p>Attended 0 Events </p>
                        </div>  
                        <div>
                            <button className='btn btn--accent btn--small'>Edit profile</button>
                        </div>                  
                    
               </div>
           
            </div>
         </>

            

        )
    }
}

export default ProfileNavBar;

