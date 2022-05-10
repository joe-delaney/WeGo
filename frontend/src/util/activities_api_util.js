import axios from "axios";

//Fetch activities for a given query (will need to send in filters)
export const fetchActivities = (query) => axios.get('/api/activities');

//Create activity
export const createActivity = (activity) => 
    axios.post('/api/activities', activity);

//Update activity
export const updateActivity = (activity) => 
    axios.post(`/api/activities/${activity.id}`, activity);

//Delete activity
export const deleteActivity = (activityId) =>
    axios.delete(`/api/activities/${activityId}`);