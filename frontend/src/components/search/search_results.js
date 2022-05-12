import React from 'react';
import './search.css';

class SearchResults extends React.Component {
    constructor(props) {
      super(props);

    }

    render(){
        return(
            <div className='search-result'>                
                <ul>
                    {this.props.activities.map((activity, idx) => (
                        <li key={idx}>
                            <span>{activity.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SearchResults;