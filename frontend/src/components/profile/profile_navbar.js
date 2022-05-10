import React from 'react';
import { Link } from 'react-router-dom'

class ProfileFeed extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        let fullName = this.props.user ? `${this.props.user.fname} ${this.props.user.lname}` : "";
        let pronouns = (this.props.user && this.props.user.pronouns) ? `(${this.props.user.pronouns})` : "";
        let age = this.props.user ? `${this.props.user.age} years old` : "";

        return(
         <>
            <div className='profile__top'> 
                <div className="profile__coverpotp" >
                    <div className="profile__coverbar" >
                        <div className='profile__about--slogan'>
                            <p>Who's In? <span className='profile__about--slogan-blod'>WeGo</span></p>
                        </div>
                    </div>
                </div>
                <div className='profile__img'>
                    <div>
                        { this.props.user ? <img src={this.props.user.profilePhotoPath} className='profile__useravatar' /> : null }
                    </div>
                    <div className='profile__userinfo--heading'>
                            <h1>{fullName} {pronouns}</h1>
                            <p>{age}</p>
                            {/* <p>Attended 0 Events </p> */}
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

export default ProfileFeed;

