import { connect } from 'react-redux';
import { searchActivities } from '../../actions/activity_actions';
import SearchIndex from './search_index';

const mapStateToProps = state => {
    return {
       activities: state.entities.activities
    };
};

const mapDispatchToProps = dispatch => {
    return {
        search: (queryObj) => dispatch(searchActivities(queryObj))
    }
}

const SearchIndexContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchIndex);

export default SearchIndexContainer;