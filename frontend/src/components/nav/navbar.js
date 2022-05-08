import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
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
              <div>
                <Link to={'/signup'} >Signup</Link>
                <Link to={'/login'}>Login</Link>
              </div>
                
          </div>
        )
    }
}

export default NavBar;