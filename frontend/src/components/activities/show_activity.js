import React from "react";
import "./activityshow.css";

export default class ShowActivity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let activityTitle = this.props.activity ? this.props.activity.title : "";
        let activityTime = this.props.activity ? this.props.activity.time : "";
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
                <span>{`Hosted by ${activityHost}`}</span>
                <div>
                    <strong>When: </strong>
                    <span>{activityTime}</span>
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