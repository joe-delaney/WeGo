import React from 'react'
import ActivityItem from './activity_item'
import './activity.css'

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
            <div className='acivity_feed'>
                <h2>Upcoming events</h2>
                <div className='activityreel'>
                    <ActivityItem
                        image="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg"
                        title="Music"
                    />
                    <ActivityItem
                        image="https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg"
                        title="Traveling"
                    />
                    <ActivityItem
                        image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                        title="Shopping"
                    />

                    <ActivityItem
                        image="https://previews.123rf.com/images/nd3000/nd30001707/nd3000170700616/82432507-group-of-happy-friends-hang-out-together.jpg"
                        title="hangout"
                    />
                    {/* {activities.map((activity, idx) => (
                        <ActivityItem
                            key={idx}
                            image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                            title={activity.title}
                        />
                    ))} */}
                    
                    {/* {createNewActivity} */}
                </div>
            </div>
        )
    }

    render() {
        return this.getActivities();
    }
}