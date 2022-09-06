import React from "react";
import * as DateUtil from "../../util/date_util";

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let activity = this.props.activity;
        let activityImg = activity ? activity.tag.img : "";
        let activityTitle = activity ? activity.title : "";
        let activityTime = activity ? activity.time : "";
        let activityDate = activityTime ? DateUtil.convertToDate(activityTime) : "";
        let activityTimeLabel = activityTime ? DateUtil.convertToTime(activityTime) : "";
        let activityLocation = activity ? activity.location : "";
        let activityAttendees = activity ? activity.approvedAttendees.length : 0;
        let attendeesLabel = activityAttendees === 1 ? "attendee" : "attendees";
        return (
            <li className="search-result-container">
                <div className="search-img-container">
                    <img className="search-img" src={activityImg} alt="activity image"></img>
                </div>
                <div className="search-result-contents">
                    <div className="search-result-contents-top">
                        <strong className="search-result-date">{`${activityDate} at ${activityTimeLabel}`}</strong>
                        <strong className="search-result-title">{activityTitle}</strong>
                        <span className="search-result-location">{activityLocation}</span>
                        <span onClick={() => this.props.openModal("showActivity", activity.id)} className="search-see-more-info">See more info</span>
                    </div>
                    <div className="search-result-contents-bottom">
                        <span className="search-result-attendees">{`${activityAttendees} ${attendeesLabel}`}</span>
                    </div>
                </div>
            </li>
        )

    }
}