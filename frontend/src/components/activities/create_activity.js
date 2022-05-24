import React from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import './create_activity.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default class CreateActivity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            time: "",
            host: this.props.currentUser.id,
            location: "",
            description: "",
            tag: "",
            price: 1,
            duration: 1,
            capacity: 2,
            address: '' 
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handleChange = location => {
        this.setState({ location });
      };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createActivity(this.state)
        this.props.closeModal();
    }

    render() {
        return (
            <div>
                <form className="form__box">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <div className="form__header">
                            <h1>Create a new Activity!</h1>
                    </div>
                    <label className="input-label">What</label> 
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                            className="input"
                        />
                    </div>
                    <label className="input-label">When</label>   
                    <div className="input-group">
                        <input
                            type="datetime-local"
                            placeholder="time"
                            value={this.state.time}
                            onChange={this.handleInput("time")}
                            className="input"
                            />  
                    </div>
                    <label className="input-label">Where</label> 
                    <div className="input-group">                
                            <PlacesAutocomplete
                            value={this.state.location}
                            onChange={this.handleChange}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'input',
                                })}
                                />
                                <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map((suggestion,idx) => {
                                    const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                    <div key={idx}
                                        {...getSuggestionItemProps(suggestion, {   
                                        className,                                     
                                        style,
                                        })}
                                    >
                                        <span><LocationOnIcon />{suggestion.description}</span>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            )}
                        </PlacesAutocomplete>
                    </div> 
                    <label className="input-label">Tell everyone a little more (optional)</label>
                        <div className="input-group">
                            <textarea
                                type="text"
                                placeholder="Activity description"
                                value={this.state.description}
                                onChange={this.handleInput("description")}
                                rows="3"
                                className="input"
                            />
                    </div>
                    
                    <label className="input-label">Maximum number of participants</label>
                    <div className="input-group">
                        <input
                            type="number"
                            placeholder="Capacity"
                            value={this.state.capacity}
                            onChange={this.handleInput("capacity")}
                            className="input"
                            min="2"
                        />
                    </div>
                    <div className="form__group">
                        <div className="input-group">
                            <select 
                                defaultValue="DEFAULT"
                                name="tag" 
                                id="tag-select" 
                                className="input"
                                onChange={this.handleInput("tag")}>
                                <option value="DEFAULT" disabled>Tag</option>
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
                        <div className="input-group">
                            <select 
                                defaultValue="DEFAULT"
                                name="cost" 
                                id="activity-cost" 
                                className="input"
                                onChange={this.handleInput("cost")}>
                                <option value="DEFAULT" disabled>Cost</option>
                                <option value="0">Free</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <select 
                                defaultValue="DEFAULT"
                                name="duration" 
                                id="activity-duration" 
                                className="input"
                                onChange={this.handleInput("duration")}>
                                <option value="DEFAULT" disabled>Duration</option>
                                <option value="1">Less than an hour</option>
                                <option value="2">1-2 hours</option>
                                <option value="3">2-4 hours</option>
                                <option value="4">4+ hours</option>
                            </select>
                        </div>
                    </div>
            
                    <div className="form__submit">
                        <input
                            className="btn btn--primary"
                            type="submit"
                            value="Create Activity"
                            onClick={this.handleSubmit} />
                    </div>
                
                </form>
            </div>
        )
    }
}