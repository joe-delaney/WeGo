import React from 'react';
import { Link } from 'react-router-dom'
import NavBarContainer from "../nav/navbar_container";
import ModalContainer from "../modal/modal_container";
import SearchBar from './search_bar';
import './search.css'




class SearchIndex extends React.Component {
    constructor(props) {
      super(props);

    }

    render(){
        return(
            <>
                <ModalContainer />
                <NavBarContainer />
                <div className="feel__body">
                    <SearchBar/>
                </div>
               
            </>
        )
    }
}

export default SearchIndex;