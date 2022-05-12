import React from 'react';
import './search.css';
import SearchResult from './search_result';

class SearchResults extends React.Component {
    constructor(props) {
      super(props);

    }

    render(){
        let sorted = this.props.activities.map(x => x).sort((a,b) => a.time > b.time ? 1 : -1);

        let component = sorted.length ? (
            <ul className='search-results'>
                {sorted.map((activity, idx) => (
                    <SearchResult
                        activity={activity}
                        key={idx}
                        openModal={this.props.openModal}
                    />
                ))}
            </ul>
        ) : (
            <div>We couldn't find any activities matching your search criteria. Feel free to change your search or check out popular activities here</div>
        );

        return(
            <div className='search-result'>                
               {component}
            </div>
        )
    }
}

export default SearchResults;