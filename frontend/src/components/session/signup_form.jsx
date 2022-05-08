import React from "react";

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password2: "",
            fname: "",
            lname: "",
            age: "",
            pronouns: "",
            jobTitle: "",
            education: "",
            interests: "",
            page1: true
        }

        this.handleInput = this.handleInput.bind(this);
        this.getSignUpPage1 = this.getSignUpPage1.bind(this);
        this.getSignUpPage2 = this.getSignUpPage2.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.goBack = this.goBack.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleInput(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    getSignUpPage1() {
        return (
            <div>
                <h1>Sign up for a new account</h1>
                <h2>Start with the Basics</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleInput("email")} />
                <input
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")} />
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={this.state.password2}
                    onChange={this.handleInput("password2")} />
                <input
                    type="text"
                    placeholder="First name"
                    value={this.state.fname}
                    onChange={this.handleInput("fname")} />
                <input
                    type="text"
                    placeholder="Last name"
                    value={this.state.lname}
                    onChange={this.handleInput("lname")} />
                <input
                    type="Number"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleInput("age")}
                    min="18"
                    max="110" />
                <button onClick={this.nextPage}>Next</button>
                {this.renderErrors()}
            </div>
        )
    }

    nextPage() {
        this.setState({
            page1: false
        })
    }

    goBack() {
        this.setState({
            page1: true
        })
    }

    getSignUpPage2() {
        return (
            <div>
                <form>
                    <h1>Sign up for a new account</h1>
                    <h2>Let's get personal</h2>
                    <input
                        type="text"
                        placeholder="pronouns"
                        value={this.state.pronouns}
                        onChange={this.handleInput("pronouns")} />
                    <input
                        type="text"
                        placeholder="jobTitle"
                        value={this.state.jobTitle}
                        onChange={this.handleInput("jobTitle")} />
                    <input
                        type="text"
                        placeholder="education"
                        value={this.state.education}
                        onChange={this.handleInput("education")} />
                    <input
                        type="text"
                        placeholder="interests"
                        value={this.state.interests}
                        onChange={this.handleInput("interests")} />
                    <input
                        type="submit"
                        value="Signup"
                        onClick={this.handleSignup} />
                </form>
                <button onClick={this.handleSignup}>Skip for now</button>
                <button onClick={this.goBack}>Go back</button>
            </div>
        )
    }

    handleSignup(e) {
        e.preventDefault();
        //Sign up the user
        this.props.signup(this.state);

        // Reset the state
        this.setState({
            email: "",
            password: "",
            password2: "",
            fname: "",
            lname: "",
            age: "",
            pronouns: "",
            jobTitle: "",
            education: "",
            interests: "",
            page1: true
        })

        //Close the modal
        this.toggleModal();
    }

    toggleModal() {
        //This will be used to close the modal
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if(this.state.page1) {
            return this.getSignUpPage1();
        } else {
            return this.getSignUpPage2();
        }
    }
}