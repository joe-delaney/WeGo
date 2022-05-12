import React from 'react';
import { Link } from 'react-router-dom'
import NavBarContainer from "../nav/navbar_container";
import ModalContainer from "../modal/modal_container";
import SearchBar from './search_bar';
import SearchFilter  from './search_filter';
import SearchResult from './search_result';
import SearchInputs from './search_inputs';
import './search.css';

class SearchIndex extends React.Component {
    constructor(props) {
      super(props);

    }

    render(){
        return(
            <>
                <ModalContainer />
                              
                <div className="search__top">
                    <NavBarContainer /> 
                    <SearchInputs 
                        search={this.props.search}/>
                </div>
                <div className="search__body">
                    <SearchResult />
                </div>
               
            </>
        )
    }
}

export default SearchIndex;