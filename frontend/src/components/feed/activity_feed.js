import React from 'react'
import ActivityItem from './activity_item'
import './activity.css'

export default class ActivityFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seeMore: false
        }

        this.getActivities = this.getActivities.bind(this);
        this.seeMore = this.seeMore.bind(this);
        this.seeLess = this.seeLess.bind(this);

    }

    componentDidMount() {
        this.props.fetchActivities();
    }

    seeMore() {
        this.setState({
            seeMore: true
        })
    }

    seeLess() {
        this.setState({
            seeMore: false
        })
    }

    getActivities() {
        let activities = Array.isArray(this.props.activities) ? this.props.activities : [];
        if(!this.state.seeMore) activities = activities.slice(0, 4);
        let createNewActivity = this.props.loggedIn ? (
            <div style={{ backgroundImage: `url(https://img.icons8.com/android/344/plus.png)`}} onClick={() => this.props.openModal("createActivity")} className="story">
                <h4> Host an Activity!</h4>
            </div>
        ) : null;

        let bottomButton = this.state.seeMore ? (
            <div className='activity-feed-bottom'>
                <button onClick={this.seeLess} className='btn'>See less</button>
            </div >
        ) : (
            <div className = 'activity-feed-bottom'>
                <button onClick={this.seeMore} className = 'btn'>See more</button>
            </div >
        );

        return (
            <div className='acivity_feed'>
                <div className='acivity_feed__heaher'>
                    <h2>Top Matches</h2>
                </div>
                
                <div className='activityreel'>
                    {/* <ActivityItem
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

                    <ActivityItem
                        image="https://previews.123rf.com/images/nd3000/nd30001707/nd3000170700616/82432507-group-of-happy-friends-hang-out-together.jpg"
                        title="hangout"
                    /> */}
                    {activities.map((activity, idx) => (
                        <ActivityItem
                            activity={activity}
                            key={idx}
                            image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                            title={activity.title}
                            openModal={this.props.openModal}
                        />
                    ))}
                    
                    {/* {createNewActivity} */}
                </div>
                {bottomButton}
            </div>
        )
    }

    render() {
        return this.getActivities();
    }
}