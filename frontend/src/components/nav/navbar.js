import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        let navbarLinks = this.props.loggedIn ? (
          <div>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => this.props.openModal("signup")}>Signup</button>
            <button onClick={() => this.props.openModal("login")}>Login</button>
            {/* <Link to={'/signup'} >Signup</Link>
            <Link to={'/login'}>Login</Link> */}
          </div>
        )

        return (
          <div className='NavBar'>
              <div>
                  <span style={{ color: "#0071bc", fontSize: 'x-large'}}>
                     W   
                  </span>
                  <span style={{ color: "#42b2fc"}}>
                     e  
                  </span>
                  <span style={{ color: "#3f89bb", fontSize: 'x-large'}}>
                     G 
                  </span>
                  <span style={{ color: "#08c3fc"}}>
                     o  
                  </span>
              </div>
              {navbarLinks}
          </div>
        )
    }
}

export default NavBar;