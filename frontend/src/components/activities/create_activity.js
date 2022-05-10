import React from "react";

export default class CreateActivity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            time: "",
            host: this.props.currentUser,
            location: "",
            description: "",
            price: 1,
            duration: 1,
            capacity: 1
        }
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
        this.props.createActivity(this.state);
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
                        <span>
                            {/* <SendRoundedIcon /> */}
                        </span>
                        <div className='nav__slogan'>
                            Who's In?
                        </div>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                        <div className="form__header">
                            <h1>Create a new Activity!</h1>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="title"
                                value={this.state.title}
                                onChange={this.handleInput("title")}
                                className="input"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="datetime-local"
                                placeholder="time"
                                value={this.state.time}
                                onChange={this.handleInput("time")}
                                className="input"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Location"
                                value={this.state.location}
                                onChange={this.handleInput("location")}
                                className="input"
                            />
                        </div>
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
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Capacity"
                                value={this.state.capacity}
                                onChange={this.handleInput("capacity")}
                                className="input"
                            />
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