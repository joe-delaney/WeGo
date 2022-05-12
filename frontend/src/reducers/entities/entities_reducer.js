import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import activitiesReducer from './activities_reducer';
import searchResultsReducer from './search_results_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    activities: activitiesReducer,
    searchResults: searchResultsReducer
})

export default entitiesReducer;