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
            <div className='profile__top'> 
                <div className="profile__coverpotp" >
                    <div className="profile__coverbar" >
                    </div>
                </div>
                <div className='profile__img'>
                    <div>

                        <img src="https://www.juststartcodingnow.com/wp-content/uploads/2019/03/JustStartCoding_logo_01.png"
                        className="profile__useravatar"/>
                    </div>
                    <div className='profile__userinfo--heading'>
                            <h1>Demo User</h1>
                            <p>Attended 0 Events </p>
                        {/* <div>
                             <button className='btn btn--grey btn--small'>Edit profile</button>
                        </div>  */}
                    </div>  
                   
                </div>
            </div>

 
            {/* <div className='profile__navbar'>                    
                <div className="profile__option"> About </div>                       
            </div>  */}
         </>

            

        )
    }
}

export default ProfileNavBar;

