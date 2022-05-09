import React from 'react';
import { Link } from 'react-router-dom';
import ProfileAbout from "./profile_about";
import ProfileEvents from "./profile_evens";



class ProfileNavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        feedstatus: "about"
      }
      this.handleInput = this.handleInput.bind(this);

    }

    handleInput(feedstatus) {
        return e => {
            this.setState({
                feedstatus: feedstatus
            })
        }
    }

   

    render() {
        let feedstatus= '';
        
        if(this.state.feedstatus === "about"){
            feedstatus= 
                <>
                    <div  className='profile__feedbar'> 
                        <div 
                            className='profile__feedbar--option active'
                            onClick={this.handleInput('about')}>
                                About
                        </div>
                        <div 
                            className='profile__feedbar--option'
                            onClick={this.handleInput('events')}>
                                Events
                        </div>
                        
                    </div> 
                    <ProfileAbout />
                </> 
        }else{
            feedstatus= 
            <>
            <div  className='profile__feedbar'> 
                <div 
                    className='profile__feedbar--option '
                    onClick={this.handleInput('about')}>
                        About
                </div>
                <div 
                    className='profile__feedbar--option active'
                    onClick={this.handleInput('events')}>
                        Events
                </div>
                
            </div> 
            <ProfileEvents />
        </> 
        }
        return(
         <div className='profile__feed'>
            {feedstatus}              
                     
         </div>
        )
    }
}

export default ProfileNavBar;