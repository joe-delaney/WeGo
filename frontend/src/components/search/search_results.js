import React from 'react';
import './search.css';
import SearchResult from './search_result';

class SearchResults extends React.Component {
    constructor(props) {
      super(props);

    }

    render(){
        let sorted = this.props.activities.map(x => x).sort((a,b) => a.time > b.time ? 1 : -1);

        return(
            <div className='search-result'>                
                <ul className='search-results'>
                    {sorted.map((activity, idx) => (
                        <SearchResult
                            activity={activity}
                            key={idx}
                            openModal={this.props.openModal}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default SearchResults;