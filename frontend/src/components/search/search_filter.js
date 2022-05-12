import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

class SearchFilter extends React.Component {
    constructor(props) {
      super(props);

    }

    render(){
        return(
            <>
                <div className="Search__filter">
                    <div className=''>
                        <button className="Search__filter--option">Any tag <KeyboardArrowDownIcon /></button>
                    </div>
                    <div className=''>
                        <button className="Search__filter--option">Any cost <KeyboardArrowDownIcon /></button>
                    </div>
                    <div className=''>
                        <button className="Search__filter--option">Any duration <KeyboardArrowDownIcon /></button>
                    </div>
                    <div className=''>
                        <button className="Search__filter--option">Any capacity <KeyboardArrowDownIcon /></button>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchFilter ;