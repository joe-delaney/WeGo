import React from 'react';
import { Link } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

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
                <div className="profile__coverpotp" >/
                    <div className="profile__coverbar" >
                        <div className='profile__about--slogan'>
                            <p>Who's In? <span className='profile__about--slogan-blod'>WeGo</span></p>
                        </div>
                    </div>
                </div>
                
                <div className='profile__img'>
                    <div className='profile__img--avatar'>
                    { this.props.user && this.props.user.profilePhotoPath ? 
                            <img src={this.props.user.profilePhotoPath} className='profile__useravatar' /> : 
                            <img src="/api/images/41daf94ffdccb355db7a624258d02f60" className="profile__useravatar"/> }
                        <div className='profile__img--edit' onClick={() => this.props.openModal("editProfileAvatar")}><AddAPhotoIcon sx={{fontSize: 30 }}/></div>
                    </div>
                   
                    <div className='profile__userinfo--heading'>
                            <h1 className='profile-name'>{fullName}</h1>
                            <h2 className='profile-pronouns'>{pronouns}</h2>
                            <p className='profile-age'>{age}</p>
                            
                    </div>  
                   
                </div>
            </div>
         </>
        )
    }
}

export default ProfileFeed;