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
      console.log('test');
    }

    render() {
        return(
            <div className=" container ">
                    <header className="">
                      
                        
                    </header>
                    <div className="input-group feed__search">
                        <input type="text" className="input" placeholder="Enter name here..." />
                        <button className="btn btn--blue-dark">Search</button>
                    </div>
            </div>

        )
    }
}

export default Search