import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';


class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: this.props.loggedIn,
        query: ""
      };

      this.handleSearch = this.handleSearch.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.handleEnter = this.handleEnter.bind(this);
    }
    componentDidMount() {
      if (this.props.currentUser) this.props.fetchUser(this.props.currentUser)
    }

    handleInput(type) {
      return e => {
        this.setState({
          [type]: e.target.value
        })
      }
    }

    handleSearch(e) {
      this.props.history.push({
        pathname: '/search',
        state: {
          query: this.state.query,
        },
      })
    }

    handleEnter(e) {
      if (e.charCode === 13) {
        this.handleSearch();
      }
    }

    render() {
      const params = this.props.url.split("/");
      const searchbar = (params[params.length -2] === 'profile') ? 
                          <div className='navbar__search' >
                              <input onKeyPress={this.handleEnter} onChange={this.handleInput("query")} value={this.state.query} type="text" className="navbar__search__input" placeholder="" />
                              <button onClick={this.handleSearch} className='navbar__search-btn'><SearchIcon sx={{fontSize: 28, color: 'white'}} /></button>
                          </div>  
                         :  ""

      let addIcon = this.props.loggedIn ? (
        <div className="nav__right--option" onClick={() => this.props.openModal("createActivity")}>
          <AddIcon sx={{ fontSize: 30 }} />
        </div>
      ) : null;

      const username = (this.props.user) ? this.props.user.fname + ' ' + this.props.user.lname : '';
        let navbarLinks = (this.props.loggedIn) ? (
          <div className='nav__right'> 
             
            <div className="nav__right--option">
              <Link to="/"> <HomeIcon sx={{fontSize: 30 }}/></Link>
            </div>         
        
            {addIcon} 
         
            <div  className="nav__right--option">
              <ChatRoundedIcon sx={{fontSize: 25 }}/>
            </div>
            <div  className="nav__right--option nav__menu--more">
              <ArrowDropDownRoundedIcon sx={{fontSize: 40 }}/>
              <div className='nav__menu'>
                  <div className='nav__menu--option'>                        
              
                        <Avatar src={(this.props.user) ? this.props.user.profilePhotoPath : ""} 
                                sx={{fontSize: 25 }} className='nav__menu-img'/>
                        <Link to={`/profile/${this.props.currentUser}`}> See your profile </Link> 
                  </div>
                  <div className='nav__menu--option'>
                      <ExitToAppIcon  sx={{fontSize: 35 }} className='nav__menu-img'/>
                      <Link to={'/'} onClick={this.props.logout}>   Logout </Link>
                  </div>
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
                        <span style={{ color: "#0071bc", fontSize: 'xx-large', fontWeight: '700'}}>
                            W   
                        </span>
                        <span style={{ color: "#42b2fc", fontSize: 'x-large'}}>
                            e  
                        </span>
                        <span style={{ color: "#3f89bb", fontSize: 'xx-large', fontWeight: '700'}}>
                            G 
                        </span>
                        <span style={{ color: "#08c3fc", fontSize: 'x-large'}}>
                            o  
                        </span>
                      
                        
                    </Link>
                   
                  </div>
                 
                </div>
                {searchbar}
              </div>
     
                 
               <div className='nav__right'>                       
                {navbarLinks}
              </div>   
          </div>
        )
    }
}

export default NavBar;