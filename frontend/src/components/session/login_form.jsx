import React from "react";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleInput(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handleLogin(e) {
        e.preventDefault();
        //Login the user
        this.props.login(this.state);

        //Reset the state
        this.setState({
            email: "",
            password: ""
        })

        //Close the login modal
        this.toggleModal();
    }

    toggleModal() {
        //This will be used to close the modal once implemented
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
        return (
            <div>
                <form>
                    <h1>Log in to your account!</h1>
                    <input 
                        type="text" 
                        placeholder="email" 
                        value={this.state.email} 
                        onChange={this.handleInput("email")}/>
                    <input 
                        type="password" 
                        placeholder="password" 
                        value={this.state.password} 
                        onChange={this.handleInput("password")}/>
                    <input 
                        type="submit" 
                        value="Login" 
                        onClick={this.handleLogin}/>
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}