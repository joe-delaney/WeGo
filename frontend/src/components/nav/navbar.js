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

                <div className="nav__user--username">Demo User</div>                                
                </div>

                <ul class="list nav__list">
                  <li class="nav__item"><Link to={'/signup'} >Signup</Link></li>
                  <li class="nav__item"><Link to={'/login'}>Login</Link></li>
                </ul>
                
              </div>
                
          </div>
        )
    }
}

export default NavBar;