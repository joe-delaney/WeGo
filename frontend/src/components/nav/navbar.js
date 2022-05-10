import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import Avatar from '@mui/material/Avatar';

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {loggedIn: this.props.loggedIn};
    }
    componentDidMount() {
      this.props.fetchUser(this.props.currentUser)
   }
  

    render() {
      const username = (this.props.user) ? this.props.user.fname + ' ' + this.props.user.lname : '';
        let navbarLinks = (this.props.loggedIn) ? (
          <div className='nav__right--avatar'>
            <div>
              <ul className="list nav__list">
                <li className="nav__item" >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypACuX8ygmzipbD197uPBv40pqsvU8Egh-_Oo_xqg2OQqZbL1Cm-5XRxVcF3QjaocHCg&usqp=CAU' className='nav__avatar' />  
                </li>
              </ul>  
             
            </div>
            <div className='nav__userinfo'>
               {username}
            </div>
             <div className='nav__menu'>
                  <div>
                      <Link to={`/profile/${this.props.currentUser}`}> Profile </Link> 
                  </div>
                  <div>
                      <Link to={'/'} onClick={this.props.logout}> Logout</Link>
                  </div>
              </div>         
          </div>
        ) : (
          <div>
             <ul className="list nav__list">
              <li className="nav__item singup"  onClick={()=>this.props.openModal('signup')}>Signup</li>
              <li className="nav__item"  onClick={()=>this.props.openModal('login')}>Login</li>
            </ul>
          </div>
        )
        return (
          <div className='nav'>
              <div className='nav_left'>
                <div>
                  <div className='nav__logo'>
                    <Link to="/">
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
                        </span>
                    </Link>
                  </div>
                </div>
              </div>
               <div className='nav__right'>                       
                {navbarLinks}
              </div>   
          </div>
        )
    }
}

export default NavBar;