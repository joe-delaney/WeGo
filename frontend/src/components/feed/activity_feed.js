import React from 'react'
import ActivityItem from './activity_item'
import './activity.css'

export default class ActivityFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            upcomingPage: 1,
            popularPage: 1
        }

        this.getActivities = this.getActivities.bind(this);
        this.expandUpcomingLeft = this.expandUpcomingLeft.bind(this);
        this.expandUpcomingRight = this.expandUpcomingRight.bind(this);
        this.expandPopularRight = this.expandPopularRight.bind(this);
        this.expandPopularLeft = this.expandPopularLeft.bind(this);

    }

    componentDidMount() {
        this.props.fetchActivities();
    }

    expandUpcomingRight() {
        this.setState({
            upcomingPage: this.state.upcomingPage+1
        })
    }

    expandUpcomingLeft() {
        this.setState({
            upcomingPage: this.state.upcomingPage - 1
        })
    }

    expandPopularRight() {
        this.setState({
            popularPage: this.state.popularPage+1
        })
    }

    expandPopularLeft() {
        this.setState({
            popularPage: this.state.popularPage - 1
        })
    }

    getActivities() {
        let upcomingActivities = Array.isArray(this.props.activities) ? this.props.activities.map(x => x).sort((a,b) => a.time > b.time ? 1 : -1) : [];

        switch(this.state.upcomingPage) {
            case 1:
                upcomingActivities = upcomingActivities.slice(0, 4);
                break;
            case 2:
                upcomingActivities = upcomingActivities.slice(4, 8);
                break;
            case 3:
                upcomingActivities = upcomingActivities.slice(8, 12);
                break;
        }
        

        let popularActivities = Array.isArray(this.props.activities) ? this.props.activities.map(x=>x).sort((a, b) => a.approvedAttendees.length <= b.approvedAttendees.length ? 1 : -1) : [];

        switch (this.state.popularPage) {
            case 1:
                popularActivities = popularActivities.slice(0, 4);
                break;
            case 2:
                popularActivities = popularActivities.slice(4, 8);
                break;
            case 3:
                popularActivities = popularActivities.slice(8, 12);
                break;
        }

        let upcomingActivityFeedHeader = upcomingActivities.length ? (
            <div className='acivity_feed__heaher'>
                <h2>Upcoming activities</h2>
            </div>
        ) : null;

        let populaActivityFeedHeader = popularActivities.length ? (
            <div className='acivity_feed__heaher'>
                <h2>Popular activities</h2>
            </div>
        ) : null;

        return (
            <div>
            <div className='acivity_feed'>
                    {upcomingActivityFeedHeader}
                
                <div className='activityreel'>
                    {upcomingActivities.map((activity, idx) => (
                        <ActivityItem
                            activity={activity}
                            key={idx}
                            image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                            title={activity.title}
                            openModal={this.props.openModal}
                            lastItem={idx === upcomingActivities.length-1}
                            firstItem={idx === 0}
                            page={this.state.upcomingPage}
                            expandRight={this.expandUpcomingRight}
                            expandLeft={this.expandUpcomingLeft}
                        />
                    ))}
                </div>
            </div>
                <div className='acivity_feed'>
                    {populaActivityFeedHeader}

                    <div className='activityreel'>
                        {popularActivities.map((activity, idx) => (
                            <ActivityItem
                                activity={activity}
                                key={idx}
                                image="https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg"
                                title={activity.title}
                                openModal={this.props.openModal}
                                lastItem={idx === popularActivities.length - 1}
                                firstItem={idx === 0}
                                page={this.state.popularPage}
                                expandRight={this.expandPopularRight}
                                expandLeft={this.expandPopularLeft}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.getActivities();
    }
}