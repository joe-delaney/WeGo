import * as APIUtil from '../util/activities_api_util';
import { updateUser } from './user_actions';

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

const receiveActivities = (activities) => ({
    type: RECEIVE_ACTIVITIES,
    activities
})

const receiveActivity = (activity) => ({
    type: RECEIVE_ACTIVITY,
    activity
})

const removeActivity = (activityId) => ({
    type: REMOVE_ACTIVITY,
    activityId
})

const receiveSearchResults = (searchResults) => ({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
})

export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})

export const fetchActivities = query => dispatch => APIUtil.fetchActivities(query)
    .then(activities => dispatch(receiveActivities(activities.data)));

export const searchActivities = query => dispatch => APIUtil.searchActivities(query)
    .then(activities => dispatch(receiveSearchResults(activities.data)));

export const createActivity = activity => dispatch => APIUtil.createActivity(activity)
    .then(activity => {
        dispatch(receiveActivity(activity.data))
        let user = {
            id: activity.data.host._id,
            hostedActivity: activity.data.id
        };
        dispatch(updateUser(user));
    });

export const updateActivity = activity => dispatch => APIUtil.updateActivity(activity)
    .then(activity => dispatch(receiveActivity(activity.data)));

export const deleteActivity = activityId => dispatch => APIUtil.deleteActivity(activityId)
    .then(activityId => dispatch(removeActivity(activityId)));