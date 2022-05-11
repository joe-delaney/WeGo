import { connect } from 'react-redux';
import SearchIndex from './search_index';

const mapStateToProps = state => {
    return {
       
    };
};

const mapDispatchToProps = dispatch => {
    return {
      
    }
}

const SearchIndexContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchIndex);

export default SearchIndexContainer;