import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from "../../actions/activity_actions";

const searchResultsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.searchResults;
        case CLEAR_SEARCH_RESULTS:
            return [];
        default:
            return state;
    }
}

export default searchResultsReducer;