import React from "react";

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
            capacity: 2
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.createActivity(this.state)
        .then(activity => {
            let user = {
                id: this.props.currentUser.id,
                hostedActivity: activity.id
            }
            this.props.updateUser(user);
        });
        this.props.closeModal();
    }

    render() {
        return (
            <div>
                <form className="form__box">
                    <div className='nav__logo'>
                        <span style={{ color: "#0071bc", fontSize: 'x-large', fontWeight: '700' }}>
                            W
                        </span>
                        <span style={{ color: "#42b2fc" }}>
                            e
                        </span>
                        <span style={{ color: "#3f89bb", fontSize: 'x-large', fontWeight: '700' }}>
                            G
                        </span>
                        <span style={{ color: "#08c3fc" }}>
                            o
                        </span>
                        <div className='nav__slogan'>
                            Who's In?
                        </div>
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
                            <input
                                type="text"
                                placeholder="Location"
                                value={this.state.location}
                                onChange={this.handleInput("location")}
                                className="input"
                            />
                        </div>
                        <label className="input-label">Tell everyone a little more (optional)</label>
                        <div className="input-group">
                            <textarea
                                type="text"
                                placeholder="Activity description"
                                value={this.state.description}
                                onChange={this.handleInput("description")}
                                rows="5"
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
                        <div className="input-group">
                            <select 
                                defaultValue="DEFAULT"
                                name="tag" 
                                id="tag-select" 
                                className="input"
                                onChange={this.handleInput("tag")}>
                                <option value="DEFAULT" disabled>Choose a genre</option>
                                <option value="sports">Sports</option>
                                <option value="education">Education</option>
                                <option value="relax">Relaxing</option>
                                <option value="music">Music</option>
                                <option value="shopping">Shopping</option>
                                <option value="late-night">Late night</option>
                                <option value="travel">Travel</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="Food">Food</option>
                                <option value="Casual">Casual</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <select 
                                defaultValue="DEFAULT"
                                name="cost" 
                                id="activity-cost" 
                                className="input"
                                onChange={this.handleInput("cost")}>
                                <option value="DEFAULT" disabled>Activity Cost</option>
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
                                <option value="DEFAULT" disabled>Activity Duration</option>
                                <option value="1">Less than an hour</option>
                                <option value="2">1-2 hours</option>
                                <option value="3">2-4 hours</option>
                                <option value="4">4+ hours</option>
                            </select>
                        </div>
                        <div className="form__submit">
                            <input
                                className="btn btn--primary"
                                type="submit"
                                value="Create Activity"
                                onClick={this.handleSubmit} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}