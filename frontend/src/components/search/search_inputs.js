import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './search.css'
import SearchIcon from '@mui/icons-material/Search';

export default class SearchInputs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.history.location.state && this.props.history.location.state.query ? this.props.history.location.state.query : "",
            tag: "",
            price: "4",
            duration: "4",
            capacity: "100"
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    componentDidMount() {
        if (this.props.history.location.state && this.props.history.location.state.query) {
            this.props.search(this.state);
        }
    }

    handleInput(type) {
        return async (e) => {
            await this.setState({
                [type]: e.target.value
            })
            if(type !== "title") this.props.search(this.state);
        } 
    }

    handleSubmit(e) {
        this.props.search(this.state);
    }

    handleEnter(e) {
        if(e.charCode === 13) {
            this.handleSubmit();
        }
    }

    render() {
       return  (
        <>
            <div className="container ">
                <div className={`feed__search ${this.props.search}`} id="feed__search">
                    <input onKeyPress={this.handleEnter} value={this.state.title} type="text" className="search__input" placeholder="Find your next adventure..."  onChange={this.handleInput("title")}/>
                    <button onClick={this.handleSubmit} className="search-btn btn--blue-dark "><SearchIcon sx={{ fontSize: 30 }} /></button>
                </div>
            </div>
            <div className="Search__filter">
                <div className=''>
                           <select
                               defaultValue=""
                               name="tag"
                               id="tag-select"
                               className="Search__filter--option"
                               onChange={this.handleInput("tag")}>
                               <option value="">Any Tag</option>
                               <option value="sports">Sports</option>
                               <option value="education">Education</option>
                               <option value="relaxing">Relaxing</option>
                               <option value="music">Music</option>
                               <option value="shopping">Shopping</option>
                               <option value="late-night">Late night</option>
                               <option value="travel">Travel</option>
                               <option value="entertainment">Entertainment</option>
                               <option value="food">Food</option>
                               <option value="casual">Casual</option>
                           </select>
                </div>
                <div className=''>
                       <select
                           defaultValue="4"
                           name="price"
                           id="price-select"
                           className="Search__filter--option"
                           onChange={this.handleInput("price")}>
                           <option value="4">Any price</option>
                           <option value="0">Free</option>
                           <option value="1">$</option>
                           <option value="2">$$</option>
                           <option value="3">$$$</option>
                           <option value="4">$$$$</option>
                       </select>
                </div>
                <div className=''>
                       <select
                           defaultValue="4"
                           name="duration"
                           id="activity-duration"
                           className="Search__filter--option"
                           onChange={this.handleInput("duration")}>
                           <option value="4">Any duration</option>
                           <option value="1">Less than an hour</option>
                           <option value="2">1-2 hours</option>
                           <option value="3">2-4 hours</option>
                           <option value="4">4+ hours</option>
                       </select>
                </div>
                <div className=''>
                       <select
                           defaultValue="100"
                           name="max-participants"
                           id="activity-capacity"
                           className="Search__filter--option"
                           onChange={this.handleInput("capacity")}>
                           <option value="100">Any participants</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                           <option value="6">6</option>
                           <option value="7">7</option>
                           <option value="100">8+</option>
                       </select>
                </div>
            </div>
        </>
       )
    }

}

