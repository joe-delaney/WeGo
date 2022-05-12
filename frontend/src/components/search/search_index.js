import React from 'react';
import NavBarContainer from "../nav/navbar_container";
import ModalContainer from "../modal/modal_container";
import SearchResults from './search_results';
import SearchInputs from './search_inputs';
import './search.css';

class SearchIndex extends React.Component {
    constructor(props) {
      super(props);

    }

    componentDidMount() {
        if (!this.props.activitiesFetched) this.props.fetchActivities();
    }
        

    render(){
        return(
            <>
                <ModalContainer />         
                <div className="search__top">
                    <NavBarContainer /> 
                    <SearchInputs 
                        search={this.props.search}
                        history={this.props.history}/>
                </div>
                <div className="search__body">
                    <SearchResults 
                        activities={this.props.activities}
                        searchResults={this.props.searchResults}
                        openModal={this.props.openModal}
                    />
                </div>
               
            </>
        )
    }
}

export default SearchIndex;