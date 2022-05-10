
import React from 'react';
import { Link } from 'react-router-dom'



class ProfileAbout extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        let jobTitle = this.props.user && this.props.user.jobTitle ? (
            <li>
                <strong>Job title: </strong>
                <p>{this.props.user.jobTitle}</p>
            </li>
        ) : <div></div>

        let location = this.props.user && this.props.user.location ? (
            <li>
                <strong>Based in: </strong>
                <p>{this.props.user.location}</p>
            </li>
        ) : <div></div>

        let education = this.props.user && this.props.user.education ? (
            <li>
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
                   
                    <div className='profile__about--edit'>
                        <button className='btn btn--accent btn--small'>Edit Profile</button>
                    </div>
                    {editButton}
                    <div className='profile__about--intro'>
                        <div className='profile__about--left'>
                        <ul>
                            {location}
                            {jobTitle}
                            {education}
                        </ul>
                        
                        </div>
                        <div className='profile__about--right'>
                            {aboutMe}
                        </div>
                    
                    
                </div>
                
            </div>
        )
    }

}

export default ProfileAbout;