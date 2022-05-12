
import React from 'react';
import { Link } from 'react-router-dom';
import './profile_photos.css';
import * as DateUtil from "../../util/date_util"
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
                    <button onClick={() => this.props.openModal("editProfile")} className='btn btn--blue-dark btn--small'>Edit Profile</button>
                </div>
            ) : <div></div>

        
        let allActivities = this.props.user ? this.props.user.allActivities.sort((a, b) => a.time > b.time ? 1 : -1) : [];
        let activity = allActivities[0];
        let activitytitle = activity ? activity.title : "";
        let activityTime = activity ? activity.time : "";
        let activityDate = activityTime ? DateUtil.convertToDate(activityTime) : "";
        let activitylocation = activity ? activity.location : "";
        let activityImg = activity && activity.tag ? activity.tag.img : "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
  
       
        return(
                <div className='profile__about--left'>
                    <div className='profile__about--intro'>
                        <div className='profile__about--edit'>
                            {editButton} 
                        </div>
                       
                        <ul className="list">
                            {location}
                            {jobTitle}
                            {education}
                            {aboutMe}
                        </ul>  
                    </div>
                    <div className='profile__about--next'>
                        <h4>Next Activity</h4>
                        <div >
                            {/* <img src={activityImg} className='profile__activtiy--img ' /> */}
                            <p>{activitytitle}</p>
                            <p>{activityDate}</p>
                            <p>{activitylocation}</p>
                         </div> 

                    </div>
                </div>
        )
    }

}

export default ProfileAbout;