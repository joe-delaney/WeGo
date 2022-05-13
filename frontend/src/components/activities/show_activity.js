import React from "react";
import "./activityshow.css";
import * as DateUtil from "../../util/date_util"
import {Link} from "react-router-dom"
import PendingRequestItem from "./pending_request_item";
import ApprovedUserItem from "./approved_user_item";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './show_activity.css'

export default class ShowActivity extends React.Component {
    constructor(props) {
        super(props);

        this.requestToJoin = this.requestToJoin.bind(this);
        this.approveUser = this.approveUser.bind(this);
        this.denyUser = this.denyUser.bind(this);
        this.getPrice = this.getPrice.bind(this);
    }

    componentDidMount() {
        // if(this.props.activity) {
        //     this.props.fetchUser(this.props.activity.host);
        //     this.props.requestedAttendees.forEach((userId) => {
        //         this.props.fetchUser(userId);
        //     })
        //     this.props.approvedAttendees.forEach((userId) => {
        //         this.props.fetchUser(userId);
        //     })
        // }
    }

    getPrice(cost) {
        switch(cost) {
            case 0: 
                return <span>Free</span>
            case 1: 
                return <span>$</span>
            case 2: 
                return <span>$$</span>
            case 3: 
                return <span>$$$</span>
            case 4: 
                return <span>$$$$</span>
            default:
                return null;
        }
    }

    getDuration(duration) {
        switch (duration) {
            case 1:
                return <span>Less than one hour</span>
            case 2:
                return <span>1-2 hours</span>
            case 3:
                return <span>2-4 hours</span>
            case 4:
                return <span>4+ hours</span>
            default:
                return null;
        }
    }

    requestToJoin() {
        let activity = {
            id: this.props.activity.id,
            requestedAttendee: this.props.currentUserId
        }

        let chatGroupInfo = {
            hostId: this.props.activity.host._id,
            requesterId: this.props.currentUserId,
            requesterName: this.props.currentUser.fname,
            activityName: this.props.activity.title
        }

        this.props.updateActivity(activity);
        this.props.createChatGroup(chatGroupInfo);
    }

    approveUser(userId) {
        let activity = {
            id: this.props.activity.id,
            approvedAttendee: userId
        }

        let user  =  {
            id: userId,
            attendedActivity: this.props.activity.id
        }
        this.props.updateActivity(activity);
        this.props.updateUser(user);
        let chatGroups = this.props.currentUser.chatGroups
        let correctChatGroup = chatGroups.filter( el => el.subscribers.includes(userId))
        this.props.createMessage({
            text: 'Looking forward to you joining!',
            userId: this.props.currentUserId,
            chatGroupId: correctChatGroup._id
        })
    }

    denyUser(userId) {
        let activity = {
            id: this.props.activity.id,
            deniedAttendee: userId
        }
        this.props.updateActivity(activity);
    }

    render() {
        let activityTitle = this.props.activity ? this.props.activity.title : "";
        let activityTime = this.props.activity ? this.props.activity.time : "";
        let activityDate = activityTime ? DateUtil.convertToDate(activityTime) : "";
        let activityTimeLabel = activityTime ? DateUtil.convertToTime(activityTime) : "";
        let activityLocation = this.props.activity ? this.props.activity.location : "";
        let activityHost = this.props.host ? this.props.host : undefined
        let activityCapacity = this.props.activity ? this.props.activity.capacity : "";
        let hostName = activityHost ? (`${activityHost.fname} ${activityHost.lname}`) : "";
        let hostId = activityHost ? activityHost._id : "";
        let activityDescription = (this.props.activity && 
            this.props.activity.description) ? this.props.activity.description : "";
        let activityCost = this.props.activity ? this.getPrice(this.props.activity.price) : null;
        let activityDuration = this.props.activity ? this.getDuration(this.props.activity.duration) : null;
        let activityImage = this.props.activity ? this.props.activity.tag.img : "";

        let pendingRequests = (hostId === this.props.currentUserId &&
            this.props.requestedAttendees.length) ? (
            <div >
                <strong>Pending requests</strong>
                {this.props.requestedAttendees.map((user, idx) => (
                    <PendingRequestItem 
                        key={idx}
                        user={user}
                        closeModal={this.props.closeModal}
                        approveUser={this.approveUser}
                        denyUser={this.denyUser}
                    />
                ))}
                
            </div>
        ) : null;
        
        let requestToJoin = null;
        if (hostId !== this.props.currentUserId && 
            this.props.approvedAttendees.length >= activityCapacity) {
            requestToJoin =
            <div className="show__activity--option option--item">
                <span className="pending-message">This activity has reached its max capacity</span>
            </div>
        } else if (hostId !== this.props.currentUserId && this.props.currentUserId &&
            this.props.requestedAttendees.map(user => user._id).includes(this.props.currentUserId)) {
            requestToJoin =
                <div className="show__activity--option option--item">
                    <span className="pending-message">Awaiting response from host</span>
                </div>
        } else if (hostId !== this.props.currentUserId && this.props.currentUserId &&
            this.props.deniedAttendees.map(user => user._id).includes(this.props.currentUserId)) {
            requestToJoin =
                <div className="show__activity--option option--item">
                    <span className="pending-message">Sorry, this host doesn't think you're a good match</span>
                </div>
        } else if (hostId !== this.props.currentUserId && this.props.currentUserId &&
            !this.props.approvedAttendees.map(user => user._id).includes(this.props.currentUserId)) {
            requestToJoin =
                <div className="show__activity--option option--item">
                    {/* <button className="btn btn--blue-dark btn--request" onClick={this.requestToJoin}></button> */}
                    <div className='request--join' onClick={this.requestToJoin}>
                        Request to join!
                    
                    </div>
                </div>
        }

        let approvedUsers = (
            <ul className="approved-users-list">
                {this.props.approvedAttendees.map((user, idx) => (
                    <ApprovedUserItem
                        key={idx}
                        user={user}
                        closeModal={this.props.closeModal}
                    />
                ))}
            </ul>
        )

        return (
            <div className="activity-show-container">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <h2 className="activity-show-title">{activityTitle}</h2>

                <div className="activity-show-header">
                    <img src={activityImage} className="activity__img"></img>
                </div>
                
             
                <div className="show__activity--option">
                    <div className="option--left">
                        <AccessTimeIcon sx={{fontSize: 20, color: '#0d4175'}}/>
                    </div>                
                    <div className="option-right">
                        {`${activityDate} at ${activityTimeLabel}`}
                    </div>
                </div>
                <div className="show__activity--option">
                    <div className="option--left">  
                        <LocationOnIcon sx={{fontSize: 20, color: '#0d4175'}}/>
                    </div>                
                    <div className="option-right"><span>{activityLocation}</span></div>
                </div>
                <div className="show__activity--option">
                    <div className="option--left">  <strong>Hosted by </strong></div>                
                    <div className="option-right">   
                        <Link to={`/profile/${hostId}`} onClick={this.props.closeModal}>
                        <span className="activity-show-host">{`${hostName}`}</span>
                        </Link>
                    </div>
                </div>
                <div className="show__activity--option">
                    <div className="option--left"> <strong>What </strong></div>                
                    <div className="option-right"><span>{activityDescription}</span></div>
                </div>

                <div className="show__activity--option">
                    <div className="option--left">  <strong>Price </strong></div>                
                    <div className="option-right"> {activityCost}</div>
                </div>
                <div className="show__activity--option">
                    <div className="option--left"> <strong>Duration </strong></div>                
                    <div className="option-right">  {activityDuration}</div>
                </div>
                <div className="show__activity--option">
                    <div className="option--left"> <strong>Attendees </strong></div>                
                    <div className="option-right"> {approvedUsers}</div>
                </div>
        
                {pendingRequests}
                {requestToJoin}
            </div>
        )
    }
}