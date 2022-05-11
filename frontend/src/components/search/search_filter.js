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
                        <button className="Search__filter--option">Any day <KeyboardArrowDownIcon /></button>
                    </div>
                    <div className=''>
                        <button className="Search__filter--option">Any type <KeyboardArrowDownIcon /></button>
                    </div>
                    <div className=''>
                        <button className="Search__filter--option">Any distance <KeyboardArrowDownIcon /></button>
                    </div>
                    <div className=''>
                        <button className="Search__filter--option">Any category <KeyboardArrowDownIcon /></button>
                    </div>

                    <div className=''>
                        <button className="Search__filter--option">Sort by:Relavtive <KeyboardArrowDownIcon /></button>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchFilter ;