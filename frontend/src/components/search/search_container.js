import { connect } from 'react-redux';
import { fetchActivities, searchActivities } from '../../actions/activity_actions';
import SearchIndex from './search_index';
import { selectSearchResults } from '../../actions/search_selectors';

const mapStateToProps = state => {
    return {
       activities: selectSearchResults(state.entities),
       activitiesFetched: Object.values(state.entities.activities).length,
       searchResults: state.entities.searchResults
    };
};

const mapDispatchToProps = dispatch => {
    return {
        search: (queryObj) => dispatch(searchActivities(queryObj)),
        fetchActivities: () => dispatch(fetchActivities())
    }
}

const SearchIndexContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchIndex);

export default SearchIndexContainer;