import React from 'react'
import Story from './story'
import './storyreel.css'

export default class StoryReel extends React.Component {
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
            <div onClick={() => this.props.openModal("createActivity")} className="story">
                <h4> Host an Activity!</h4>
            </div>
        ) : null;
        return (
            <div>
                <div className='storyreel'>
                    <Story
                        image="https://psychology-spot.com/wp-content/uploads/2019/10/new-music.jpg"
                        profileSrc=""
                        title="Music"
                    />
                    <Story
                        image="https://chriskresser.com/wp-content/uploads/iStock-951861300-martin-dm.jpg"
                        profileSrc=""
                        title="Traveling"
                    />
                    <Story
                        image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                        profileSrc=""
                        title="Shopping"
                    />
                    {activities.map((activity, idx) => (
                        <Story
                            key={idx}
                            image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                            profileSrc=""
                            title={activity.title}
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