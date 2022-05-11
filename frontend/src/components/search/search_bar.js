import React from 'react';
import { Link } from 'react-router-dom'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';



class Search extends React.Component {
    constructor(props) {
      super(props);

    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, { passive: true })
   }


    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll(event) {
      // do something like call `this.setState`
      // access window.scrollY etc
      
      // const feed__search = document.getElementById('feed__search');

      // if (window.scrollY > 90){  
      //   document.getElementById("feed__search").style.display = "none";   
      //   document.getElementById("feed__search_sticky").style.display = "";
      // }else{
      //   document.getElementById("feed__search").style.display = "";     
      //   document.getElementById("feed__search_sticky").style.display = "none";
                
      // }
    }

    render() {
        return(
          <>
          
            <div className="container ">
                    <div className="feed__search" id="feed__search">
                        <input type="text" className="search__input" placeholder="Start to Search..." />
                        <button className="search-btn btn--blue-dark "><SearchIcon sx={{fontSize: 30 }}/></button>
                    </div>                         
                   
            </div>            
            
          </>

        )
    }
}

export default Search