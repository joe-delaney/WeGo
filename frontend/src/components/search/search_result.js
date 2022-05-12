import React from 'react';
import './search.css';

class SearchResult extends React.Component {
    constructor(props) {
      super(props);

    }

    render(){
        console.log("about to render");
        console.log(this.props.activities);
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

export default SearchResult;