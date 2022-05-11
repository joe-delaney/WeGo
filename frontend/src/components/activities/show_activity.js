import React from "react";
import "./activityshow.css";
import * as DateUtil from "../../util/date_util"
import {Link} from "react-router-dom"
import PendingRequestItem from "./pending_request_item";
import ApprovedUserItem from "./approved_user_item";

export default class ShowActivity extends React.Component {
    constructor(props) {
        super(props);

        this.requestToJoin = this.requestToJoin.bind(this);
        this.approveUser = this.approveUser.bind(this);
        this.denyUser = this.denyUser.bind(this);
        this.getPrice = this.getPrice.bind(this);
    }

    componentDidMount() {
        if(this.props.activity) {
            this.props.fetchUser(this.props.activity.host);
            this.props.requestedAttendees.forEach((userId) => {
                this.props.fetchUser(userId);
            })
            this.props.approvedAttendees.forEach((userId) => {
                this.props.fetchUser(userId);
            })
        }
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
        this.props.updateActivity(activity);
    }

    approveUser(userId) {
        let activity = {
            id: this.props.activity.id,
            approvedAttendee: userId
        }
        this.props.updateActivity(activity);
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
        let hostId = activityHost ? activityHost.id : "";
        let activityDescription = (this.props.activity && 
            this.props.activity.description) ? this.props.activity.description : "";
        let activityCost = this.props.activity ? this.getPrice(this.props.activity.price) : null;
        let activityDuration = this.props.activity ? this.getDuration(this.props.activity.duration) : null;

        let pendingRequests = (hostId === this.props.currentUserId &&
            this.props.requestedAttendees.length) ? (
            <div>
                <strong>Pending requests</strong>
                {this.props.requestedAttendees.map((id, idx) => (
                    <PendingRequestItem 
                        key={idx}
                        user={this.props.user(id)}
                        closeModal={this.props.closeModal}
                        approveUser={this.approveUser}
                        denyUser={this.denyUser}
                    />
                ))}
                
            </div>
        ) : null;
        
        let requestToJoin = null;
        if (hostId !== this.props.currentUserId && 
            this.props.approvedAttendees.length+1 >= activityCapacity) {
            requestToJoin =
            <div>
                <span className="pending-message">This activity has reached its max capacity</span>
            </div>
        } else if (hostId !== this.props.currentUserId && this.props.currentUserId &&
            this.props.requestedAttendees.includes(this.props.currentUserId)) {
            requestToJoin =
                <div>
                    <span className="pending-message">Awaiting response from host</span>
                </div>
        } else if (hostId !== this.props.currentUserId && this.props.currentUserId &&
            this.props.deniedAttendees.includes(this.props.currentUserId)) {
            requestToJoin =
                <div>
                    <span className="pending-message">Sorry, this host doesn't think you're a good match</span>
                </div>
        } else if (hostId !== this.props.currentUserId && this.props.currentUserId &&
            !this.props.approvedAttendees.includes(this.props.currentUserId)) {
            requestToJoin =
                <div>
                    <button onClick={this.requestToJoin}>Request to join!</button>
                </div>
        }

        let approvedUsers = (
            <ul className="approved-users-list">
                <ApprovedUserItem
                    user={this.props.user(hostId)}
                    closeModal={this.props.closeModal}
                />
                {this.props.approvedAttendees.map((id, idx) => (
                    <ApprovedUserItem
                        key={idx}
                        user={this.props.user(id)}
                        closeModal={this.props.closeModal}
                    />
                ))}
            </ul>
        )

        return (
            <div className="activity-show-container">
                <div className="activity-show-header">
                    <img src="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"></img>
                </div>
                <h2 className="activity-show-title">{activityTitle}</h2>
                <div>
                    <strong>Hosted by: </strong>
                    <Link to={`/profile/${hostId}`} onClick={this.props.closeModal}>
                        <span className="activity-show-host">{`${hostName}`}</span>
                    </Link>
                </div>
                <div>
                    <strong>When: </strong>
                    <span>{`${activityDate} at ${activityTimeLabel}`}</span>
                </div>
                <div>
                    <strong>Where: </strong>
                    <span>{activityLocation}</span>
                </div>
                <div>
                    <strong>What: </strong>
                    <span>{activityDescription}</span>
                </div>
                <div>
                    <strong>Who: </strong>
                    {approvedUsers}
                </div>
                <div>
                    <strong>Price: </strong>
                    {activityCost}
                </div>
                <div>
                    <strong>Duration: </strong>
                    {activityDuration}
                </div>
                {pendingRequests}
                {requestToJoin}
            </div>
        )
    }
}