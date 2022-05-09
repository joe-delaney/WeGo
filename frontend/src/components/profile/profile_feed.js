import React from 'react';
import { Link } from 'react-router-dom'



class ProfileNavBar extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        return(
         <div className='profile__feed'>
             <div  className='profile__feedbar'>
                <div className='profile__feedbar--option active'>About</div>
                <div className='profile__feedbar--option '>Events</div>
             </div>         
         </div>
        )
    }
}

export default ProfileNavBar;