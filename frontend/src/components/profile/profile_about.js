
import React from 'react';
import { Link } from 'react-router-dom';
import './profile_photos.css';
import IndexItemActivity from '../activities/index_item_activity'


class ProfileAbout extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        let jobTitle = this.props.user && this.props.user.jobTitle ? (
            <li  className="bio__item">
                <strong>Job title: </strong>
                <p>{this.props.user.jobTitle}</p>
            </li>
        ) : <div></div>

        let location = this.props.user && this.props.user.location ? (
            <li  className="bio__item">
                <strong>Based in: </strong>
                <p>{this.props.user.location}</p>
            </li>
        ) : <div></div>

        let education = this.props.user && this.props.user.education ? (
            <li  className="bio__item">
                <strong>Education: </strong>
                <p>{this.props.user.education}</p>
            </li>
        ) : <div></div>

        let aboutMe = this.props.user ? (
            <li className="bio__item">
                <strong>Bio: </strong>
                <p>{this.props.user.aboutMe}</p>
            </li>) : <p>Tell everyone more about you!</p>;

        let editButton = this.props.user && (this.props.user.id === this.props.currentUserId) ?
            (
                <div className='profile__about--edit'>
                    <button onClick={() => this.props.openModal("editProfile")} className='btn btn--accent btn--small'>Edit Profile</button>
                </div>
            ) : <div></div>

        return(
                <div className='profile__about--left'>
                    {editButton} 
                    <ul className="list">
                        {location}
                        {jobTitle}
                        {education}
                        {aboutMe}
                    </ul>  
                </div>
        )
    }

}

export default ProfileAbout;