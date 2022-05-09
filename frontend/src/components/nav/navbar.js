import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

import Avatar from '@mui/material/Avatar';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

class NavBar extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        let loginStatus = ''
        if(this.props.isAuthenticated){
          loginStatus = <ul class="list nav__list">
            <li class="nav__item" onClick={()=>this.props.logOut()}>Log Out</li>
          </ul>

        }else{
          loginStatus = <ul class="list nav__list">
            <li class="nav__item" onClick={()=>this.props.openModal('singup')}>Signup</li>
            <li class="nav__item"  onClick={()=>this.props.openModal('login')}>Login</li>
          </ul>
        }

        return (
          <div className='nav'>
              <div className='nav_left'>
                  <div className='nav__logo'>
                    <span style={{ color: "#0071bc", fontSize: 'x-large', fontWeight: '700'}}>
                      W   
                    </span>
                    <span style={{ color: "#42b2fc"}}>
                      e  
                    </span>
                    <span style={{ color: "#3f89bb", fontSize: 'x-large', fontWeight: '700'}}>
                      G 
                    </span>
                    <span style={{ color: "#08c3fc"}}>
                      o  
                    </span>
                    <span>
                      <SendRoundedIcon />
                    </span>

                  </div>
                  <div className='nav__slogan'>
                    Who's In?
                  </div>
              </div>
             
          
               <div className='nav__right'>
                 
               <div className="nav__user"> 

                <div >
                    <Avatar  className="nav__user--img"/> 
                </div>

                <div className="nav__user--username"> </div>                                
                </div>

                  {loginStatus}
                
              </div>
                
          </div>
        )
    }
}

export default NavBar;