import React from 'react';
import { Link } from 'react-router-dom'
import './search.css'



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
      
      const feed__search = document.getElementById('feed__search');

      if (window.scrollY > 90){  
        document.getElementById("feed__search").style.display = "none";   
        document.getElementById("feed__search_sticky").style.display = "";
      }else{
        document.getElementById("feed__search").style.display = "";     
        document.getElementById("feed__search_sticky").style.display = "none";
                
      }
    }

    render() {
        return(
          <>
            <div className=" container ">
                    <header className="">                     
                        
                    </header>
                    <div className="input-group feed__search" id="feed__search">
                        <input type="text" className="input" placeholder="Enter name here..." />
                        <button className="btn btn--blue-dark">Search</button>
                    </div>                         
                   
            </div>
            
            <div className="input-group feed__search_sticky" id="feed__search_sticky" style={{display: "none"}}>
                  <input type="text" className="input" placeholder="Enter name here..." />
                  <button className="btn btn--blue-dark">Search</button>
            </div>
          </>

        )
    }
}

export default Search