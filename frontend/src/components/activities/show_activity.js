import React from "react";
import "./activityshow.css";
import * as DateUtil from "../../util/date_util"
import {Link} from "react-router-dom"

export default class ShowActivity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let activityTitle = this.props.activity ? this.props.activity.title : "";
        let activityTime = this.props.activity ? this.props.activity.time : "";
        let activityDate = activityTime ? DateUtil.convertToDate(activityTime) : "";
        let activityTimeLabel = activityTime ? DateUtil.convertToTime(activityTime) : "";
        let activityLocation = this.props.activity ? this.props.activity.location : "";
        let activityHost = this.props.activity ? this.props.activity.host : "";
        let activityDescription = (this.props.activity && 
            this.props.activity.description) ? this.props.activity.description : "";

        return (
            <div className="activity-show-container">
                <div className="activity-show-header">
                    <img src="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"></img>
                </div>
                <h2 className="activity-show-title">{activityTitle}</h2>
                <div>
                    <strong>Hosted by: </strong>
                    <Link to={`/profile/${activityHost}`} onClick={this.props.closeModal}>
                        <span className="activity-show-host">{`${activityHost}`}</span>
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
                </div>
            </div>
        )
    }
}