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
        let hostName = activityHost ? (`${activityHost.fname} ${activityHost.lname}`) : "";
        let hostId = activityHost ? activityHost.id : "";
        let activityDescription = (this.props.activity && 
            this.props.activity.description) ? this.props.activity.description : "";

        let pendingRequests = hostId === this.props.currentUserId ? (
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
        if (hostId !== this.props.currentUserId && this.props.currentUserId &&
            this.props.requestedAttendees.includes(this.props.currentUserId)) {
            requestToJoin =
                <div>
                    <span>Awaiting response from host</span>
                </div>
        } else if (hostId !== this.props.currentUserId && this.props.currentUserId &&
            this.props.deniedAttendees.includes(this.props.currentUserId)) {
            requestToJoin =
                <div>
                    <span>Sorry, this host doesn't think you're a good match</span>
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
                {pendingRequests}
                {requestToJoin}
            </div>
        )
    }
}