
import React from 'react'
import * as DateUtil from "../../util/date_util"
import PersonIcon from '@mui/icons-material/Person';

export default class ActivityItem extends React.Component {
  constructor(props) {
    super(props);
    this.requestToJoin = this.requestToJoin.bind(this);
  }

  requestToJoin() {
    let activity = {
      id: this.props.activity.id,
      requestedAttendee: this.props.currentUserId
    }

    let chatGroupInfo = {
      hostId: this.props.activity.host._id,
      requesterId: this.props.currentUserId,
      requesterName: this.props.currentUser.fname,
      activityName: this.props.activity.title
    }

      this.props.updateActivity(activity);
      // this.props.createChatGroup(chatGroupInfo);
  }

  render() {
    let activityId = this.props.activity ? this.props.activity.id : -1
    let activityImg = this.props.activity && this.props.activity.tag ? this.props.activity.tag.img : "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
    let expandRightButton = this.props.lastItem && this.props.page !== 3 ? (
      <div className='expand-arrow-container expand-arrow-right' onClick={this.props.expandRight}>
        <img className="expand-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg==" />
      </div>
    ) : null;

    let expandLeftButton = (this.props.firstItem && this.props.page !== 1) ? (
      <div className='expand-arrow-container expand-arrow-left' onClick={this.props.expandLeft}>
        <img className="expand-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg==" />
      </div>
    ) : null;

    let activityTitle = this.props.activity ? this.props.activity.title : "";
    let activityTime = this.props.activity ? this.props.activity.time : "";
    let activityDate = activityTime ? DateUtil.convertToDate(activityTime) : "";
    let activityTimeLabel = activityTime ? DateUtil.convertToTime(activityTime) : "";
    let activityLocation = this.props.activity ? this.props.activity.location : "";
    let numAttendees = this.props.activity ? this.props.activity.approvedAttendees.length : 0;
    let activityCapacity = this.props.activity ? this.props.activity.capacity : 0;

    let showButton = null;
    if(this.props.currentUser) {
      if(this.props.activity.host._id === this.props.currentUserId || 
          this.props.activity.approvedAttendees.map(x=> x._id).includes(this.props.currentUserId)) {
          showButton = <div onClick={() => this.props.openModal("showActivity", activityId)} className='activity_details--join'>VIEW</div>
      } else {
        if(this.props.activity.requestedAttendees.map(x => x._id).includes(this.props.currentUserId)) {
          showButton = <div onClick={() => this.props.openModal("showActivity", activityId)} className='activity_details--join pending'>PENDING</div>
        } else if(!this.props.activity.deniedAttendees.map(x => x._id).includes(this.props.currentUserId)) {
          showButton = <div onClick={this.requestToJoin} className='activity_details--join'>JOIN</div>
        }
      }
    } else {
      showButton = <div onClick={() => this.props.openModal("showActivity", activityId)} className='activity_details--join'>VIEW</div>
    }

    return (
      <div className='activity__item'>
        <div style={{ backgroundImage: `url(${activityImg})` }}
          className="activity"
          onClick={() => this.props.openModal("showActivity", activityId)}>
        </div>
        <div className='activity_details'>
          <div className='activity_details--title'>{activityTitle}</div>
          <div className='activity_details--date'>{`${activityDate} at ${activityTimeLabel}`}</div>
          <div className='activity_details--location'>Location: {activityLocation}</div>
          <div className='activity_details--option'>
          <div className='activity_details--people'><PersonIcon sx={{ fontSize: 25, color: '#0d4175' }} />{numAttendees}/{activityCapacity}</div>
          {showButton}
          </div>
        </div>
        {expandRightButton}
        {expandLeftButton}
      </div>
    )
  }
}