import React from "react";

export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        let fname = "";
        let lname  = "";
        let jobTitle = "";
        let education = "";
        let aboutMe = "";
        let pronouns = "";
        let id = -1;
        let location="";

        if(this.props.user) {
            fname = this.props.user.fname;
            lname = this.props.user.lname;
            jobTitle = this.props.user.jobTitle ? this.props.user.jobTitle : "";
            education = this.props.user.education ? this.props.user.education : "";
            aboutMe = this.props.user.aboutMe ? this.props.user.aboutMe : "";
            pronouns = this.props.user.pronouns ? this.props.user.pronouns : "";
            location = this.props.user.location ? this.props.user.location : "";
            id = this.props.user.id
        }

        this.state = {
            id: id,
            fname: fname,
            lname: lname,
            jobTitle: jobTitle,
            education: education,
            aboutMe: aboutMe,
            pronouns: pronouns,
            location: location
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
        this.props.updateProfile(this.state);
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
                           
                        </span>
                    <div className='nav__slogan'>
                        Who's In?
                    </div>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <div className="form__header">
                        <h1>Edit your profile!</h1>
                    </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="first name"
                                value={this.state.fname}
                                onChange={this.handleInput("fname")}
                                className="input"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="last name"
                                value={this.state.lname}
                                onChange={this.handleInput("lname")}
                                className="input"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Pronouns"
                                value={this.state.pronouns}
                                onChange={this.handleInput("pronouns")}
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
                            <input
                                type="text"
                                placeholder="Job title"
                                value={this.state.jobTitle}
                                onChange={this.handleInput("jobTitle")}
                                className="input"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Education"
                                value={this.state.education}
                                onChange={this.handleInput("education")}
                                className="input"
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                type="text"
                                placeholder="Tell everyone more about you"
                                value={this.state.aboutMe}
                                onChange={this.handleInput("aboutMe")}
                                rows="5"
                                className="input"
                            />
                        </div>
                        <div className="form__submit">
                            <input
                                className="btn btn--primary"
                                type="submit"
                                value="Save"
                                onClick={this.handleSubmit } />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}