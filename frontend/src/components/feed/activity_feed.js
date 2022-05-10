import React from 'react'
import ActivityItem from './activity_item'
import './storyreel.css'

export default class ActivityFeed extends React.Component {
    constructor(props) {
        super(props);
        this.getActivities = this.getActivities.bind(this);
    }

    componentDidMount() {
        this.props.fetchActivities();
    }

    getActivities() {
        let activities = Array.isArray(this.props.activities) ? this.props.activities : [];
        let createNewActivity = this.props.loggedIn ? (
            <div style={{ backgroundImage: `url(https://img.icons8.com/android/344/plus.png)`}} onClick={() => this.props.openModal("createActivity")} className="story">
                <h4> Host an Activity!</h4>
            </div>
        ) : null;
        return (
            <div>
                <div className='storyreel'>
                    <ActivityItem
                        image="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg"
                        title="Music"
                        openModal={this.props.openModal}
                    />
                    <ActivityItem
                        image="https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg"
                        title="Traveling"
                        openModal={this.props.openModal}
                    />
                    <ActivityItem
                        image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                        title="Shopping"
                        openModal={this.props.openModal}
                    />
                    {activities.map((activity, idx) => (
                        <ActivityItem
                            key={idx}
                            image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                            title={activity.title}
                            openModal={this.props.openModal}
                        />
                    ))}
                    {createNewActivity}
                </div>
            </div>
        )
    }

    render() {
        return this.getActivities();
    }
}