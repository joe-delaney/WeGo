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
        let navbarLinks = this.props.loggedIn ? (
          <div>
            <ul className="list nav__list">
              <li className="nav__item" onClick={()=>this.props.logout()}>Log Out</li>
            </ul>
          </div>
        ) : (
          <div>
             <ul className="list nav__list">
              <li className="nav__item" onClick={()=>this.props.openModal('signup')}>Signup</li>
              <li className="nav__item"  onClick={()=>this.props.openModal('login')}>Login</li>
            </ul>
          </div>
        )

        return (
          <div className='nav'>
              <div className='nav_left'>
                <div>
                  <div className='nav__logo'>
                      <span style={{ color: "#2596be", fontSize: 'xx-large', fontWeight: '800',  fontFamily: 'Cursive'}}>
                        W   
                      </span>
                      <span style={{ color: "#3596be", fontSize: 'x-large', fontWeight: '700',  fontFamily: 'Cursive'}}>
                        e  
                      </span>
                      <span style={{ color: "#1e81b0", fontSize: 'x-large', fontWeight: '900',  fontFamily: 'Cursive'}}>
                        G 
                      </span>
                      <span style={{ color: "#0e81b0", fontSize: 'x-large',fontWeight: '600',  fontFamily: 'Cursive'}}>
                        o  
                      </span>
                      <span>
                        {/* <SendRoundedIcon /> */}
                      </span>

                  </div>
                  {/* <div className='nav__slogan'>
                    Who's In?
                  </div> */}
                </div>
                {/* <div className='nav__search'>
                  <input 
                  className='input nav__search--input'
                  type="text" placeholder='Search Activity...' disabled/>
              </div> */}

              </div>

              
             
          
               <div className='nav__right'>
                 
               <div className="nav__user"> 
            
                <div className="nav__user--username"> 
                    {/* <Avatar /> */}
                </div>                                
                </div>
                {navbarLinks}
              </div>
                
              
          </div>
        )
    }
}

export default NavBar;