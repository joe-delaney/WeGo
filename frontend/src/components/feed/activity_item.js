
import React from 'react'
import * as DateUtil from "../../util/date_util"
import PersonIcon from '@mui/icons-material/Person';

const ActivityItem = ({title, openModal, activity, lastItem, firstItem, page, expandRight, expandLeft}) => {
  let activityId = activity ? activity.id : -1
  let activityImg = activity && activity.tag ? activity.tag.img : "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
  let expandRightButton = lastItem && page !== 3 ? (
    <div className='expand-arrow-container expand-arrow-right' onClick={expandRight}>
      <img className="expand-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg==" />
    </div>
  ) : null;

  let expandLeftButton = (firstItem && page !== 1) ? (
    <div className='expand-arrow-container expand-arrow-left' onClick={expandLeft}>
      <img className="expand-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WMUpDQRAG4I+AWNkJgpWFB7DQ0iqVrTZ6B5NLGA9hpVfIARJsAgl4BkHBSuwkIBFj8RT2LSkE2XkJ5Ictl49dZmeHdZYsQ8x/1gRbUfBDAs/RRysC3sNrhvciYDjGRwJ/4SIK76ifeoqjKPwmw1+wGwFv4D7DR9iMwLfxmOF3ETAc4D3DO1H4qaq6f+FPnEThPfVTv2E/Am6pOlmKT/6yaWVzrYGrPlMvrhnapdFFz+myNLqD5wy9LY021jLzT+JJdQNF083QKQ5Lo21V1aaDwHlpdNHoc1UapcFhb5CgY4Hj7Tr/zjfcW2a3eoiKgwAAAABJRU5ErkJggg==" />
    </div>
  ) : null;

  let activityTitle = activity ? activity.title : "";
  let activityTime = activity ? activity.time : "";
  let activityDate = activityTime ? DateUtil.convertToDate(activityTime) : "";
  let activityTimeLabel = activityTime ? DateUtil.convertToTime(activityTime) : "";
  let activityLocation = activity ? activity.location : "";

  return (
    <div className='activity__item'>
        <div style={{backgroundImage: `url(${activityImg})` }} 
          className="activity"
          onClick={() => openModal("showActivity", activityId)}>   
        </div>
        <div className='activity_details'>
            <div className='activity_details--title'>{activityTitle}</div>
            <div className='activity_details--date'>{`${activityDate} at ${activityTimeLabel}`}</div>
            <div className='activity_details--location'>Location: {activityLocation}</div>
            <div className='activity_details--option'>
              <div className='activity_details--people'><PersonIcon sx={{fontSize: 25, color: '#0d4175'}}/> 0</div>
              <div className='activity_details--join'>JOIN</div>
            </div>
        </div>
        {expandRightButton}
        {expandLeftButton}
    </div>
  )
}

export default ActivityItem