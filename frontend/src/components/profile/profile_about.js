
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

        let aboutMe = this.props.user ? (
            <li className="nav__item">
                <strong>Bio: </strong>
                <p>{this.props.user.aboutMe}</p>
            </li>) : <p>Tell everyone more about you!</p>;

        let editButton = this.props.user && (this.props.user.id === this.props.currentUserId) ?
            (
                <div className='profile__about--edit'>
                    <button onClick={() => this.props.openModal("editProfile")} className='btn btn--accent btn--small'>Edit Profile</button>
                </div>
            ) : <div></div>
        
        let allActivities = this.props.user ? this.props.user.allActivities.sort((a, b) => a.time > b.time ? 1 : -1) : [];

        return(
            // <div className='profile__about'>
                <div className='profile__about--left'>
                    {editButton} 
                    <ul className="list">
                        {location}
                        {jobTitle}
                        {education}
                        {aboutMe}
                    </ul>  
                </div>

                // <div className='profile__about--right'>
                //     {allActivities.map((activity, idx) => (
                //         <IndexItemActivity
                //             key={idx}
                //             activity={activity}
                //             renderClass="profile__activtiy--col"
                //             openModal={this.props.openModal}
                //         />
                //     ))}
                // </div>
            // </div>
        )
    }

}

export default ProfileAbout;