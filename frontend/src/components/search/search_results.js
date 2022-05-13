import React from 'react';
import './search.css';
import SearchResult from './search_result';
import {Link} from "react-router-dom";

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
            <div className="no-results-found">
                <img className="no-results-img" src="https://cdn-icons-png.flaticon.com/512/7409/7409412.png"></img>
                <div className="no-results-text">
                    <strong className='no-results-text-main'>We couldn't find any activities matching your search criteria.</strong>
                    <Link to="/" className='link-to-home'>Check out popular activities here</Link>
                </div>
            </div>
        );

        return(
            <div className='search-result'>                
               {component}
            </div>
        )
    }
}

export default SearchResults;