import React from 'react';
import './search.css'
import SearchIcon from '@mui/icons-material/Search';



class Search extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        query: ""
      }

      this.handleInput = this.handleInput.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleEnter = this.handleEnter.bind(this);
    }

    handleInput(type) {
      return e => {
        this.setState({
          [type]: e.target. value
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
        return(
          <>
            <div className="container ">          
                    <div className={`feed__search ${this.props.search}`} id="feed__search">
                        <input onKeyPress={this.handleEnter} value={this.state.query} onChange={this.handleInput("query")} type="text" className="search__input" placeholder="Find your next adventure..." />
                        <button onClick={this.handleSearch} className="search-btn btn--blue-dark "><SearchIcon sx={{fontSize: 30 }}/></button>
                    </div>                         
            </div>            
            
          </>

        )
    }
}

export default Search