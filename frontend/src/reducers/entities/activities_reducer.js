import { RECEIVE_ACTIVITIES, RECEIVE_ACTIVITY, REMOVE_ACTIVITY } from "../../actions/activity_actions";

const activitiesReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ACTIVITIES:
            return action.activities;
        case RECEIVE_ACTIVITY:
            nextState[action.activity.id] = action.activity;
            return nextState;
        case REMOVE_ACTIVITY:
            delete nextState[action.activityId];
            return nextState;
        default:
            return state;
    }
}

export default activitiesReducer;