
import React from 'react';
import { Link } from 'react-router-dom'



class ProfileAbout extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
            <div className='profile__about'>
                
                    <div  className='profile__about--slogan'>
                        <p>Who's In? <span className='profile__about--slogan-blod'>WeGo</span></p>                              
                    </div>
                    <div className='profile__about--edit'>
                        <button className='btn btn--accent btn--small'>Edit Profile</button>
                    </div>
                    <div className='profile__about--intro'>
                        <div className='profile__about--left'>
                        <ul>
                            <li>education</li>
                            <li>education</li>
                            <li>education</li>
                            <li>education</li>
                        </ul>

                        </div>
                        <div className='profile__about--right'>
                            MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js frontend framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any frontend JavaScript framework can work.
                        </div>
                    
                    
                </div>
                
            </div>
        )
    }

}

export default ProfileAbout;