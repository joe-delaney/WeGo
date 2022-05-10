import React from "react";
import './form.css'

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            files: {},
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
        this.goBack = this.goBack.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);

        this.handlefiles = this.handlefiles.bind(this)
    }

    handleInput(type) {

        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handlefiles(e){
        e.preventDefault()
        this.setState({files: e.currentTarget.files[0]})
    }

    handleSignup(e) {
        e.preventDefault();
        //Sign up the user
        let formData = new FormData();
        formData.append("email", this.state.email)
        formData.append("password", this.state.password)
        formData.append("password2", this.state.password2)
        formData.append("fname", this.state.fname)
        formData.append("lname", this.state.lname)
        formData.append("age", this.state.age)
        formData.append("pronouns", this.state.pronouns)
        formData.append("jobTitle", this.state.jobTitle)
        formData.append("education", this.state.education)
        formData.append("interests", this.state.interests)
        // for (let i = 0; i < this.state.files.length; i++) {
        //     formData.append('uploads', this.state.files[i])
        // }
        formData.append('image', this.state.files)
        
        this.props.signup(formData);
        this.props.closeModal();
        // Reset the state
        // this.setState({
        //     files: [],
        //     email: "",
        //     password: "",
        //     password2: "",
        //     fname: "",
        //     lname: "",
        //     age: "",
        //     pronouns: "",
        //     jobTitle: "",
        //     education: "",
        //     interests: "",
        //     page1: true
        // })

        //Close the modal
        // this.toggleModal();
    }

    getSignUpPage1() {
        const errors = Object.values(this.props.errors);
        // console.log(errors);
        return (
            <div className="form__box">
                <div onClick={this.props.closeModal} className="close-x">X</div> 
                <div className="form__header">
                    <h1>Sign up for a new account</h1>
                    <h2>Start with the Basics</h2>
                </div>

                <div className="form__group singup__form">
                    <div className="file_input_for_testing">
                        <input type="file" name="image" onChange={this.handlefiles} accept="image/*"/>
                    </div>
                </div>
                </div>

                <div className="form__group">
                    <div className="input-group">
                        <input
                            className="input form__input"
                            type="text"
                            placeholder="First name"
                            value={this.state.fname}
                            onChange={this.handleInput("fname")} />
                      <p className="fnameError" style={errors.includes("First name field is required") ? ({ display: "" }) : ({ display: "none" })}>
                         First name field is required
                    </p>  

                    </div>
                    
                    <div className="input-group">
                        <input
                            className="input"
                            type="text"
                            placeholder="Last name"
                            value={this.state.lname}
                            onChange={this.handleInput("lname")} />
                        <p className="lnameError" style={errors.includes("Last name field is required") ? ({ display: "" }) : ({ display: "none" })}>
                        Last name field is required
                      </p> 

                    </div>
                </div>
                <div className="input-group singup__form ">
                    <input
                        className="input"
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleInput("email")} />
                    <p className="emailError" style={errors.includes("Email is invalid") ? ({ display: "" }) : ({ display: "none" })}>
                    Email is invalid
                    </p> 

                </div>
                <div className="input-group singup__form">

                    <input
                        className="input"
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")} />
                     <p className="passwordError" style={errors.includes("Password must be at least 6 characters") ? ({ display: "" }) : ({ display: "none" })}>
                     Password must be at least 6 characters
                      </p> 
                </div>
                <div className="input-group singup__form" >
                    <input
                        className="input"
                        type="password"
                        placeholder="Confirm password"
                        value={this.state.password2}
                        onChange={this.handleInput("password2")} />
                     <p className="passwor2dError" style={errors.includes("Confirm Password field is required") ? ({ display: "" }) : ({ display: "none" })}>
                     Confirm Password field is required
                      </p>

                </div>
               
                <div className="input-group singup__form">
                    <input
                        className="input"
                        type="date"
                        placeholder="Birthday"
                        value={this.state.age}
                        onChange={this.handleInput("age")}
                        />
                    <p className="ageError" style={errors.includes("Age field is required") ? ({ display: "" }) : ({ display: "none" })}>
                         Must be at least 18 years old
                      </p>

                </div>
                <div className="form__submit singup__form">
                    <button
                        className="btn btn--secondary"
                        onClick={this.handleSignup}>Sign Up!!</button>

                </div>
            </div>
            // {this.renderErrors()}
            // </div>
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
            <form className="form__box">
                <div onClick={this.props.closeModal} className="close-x">X</div> 
                <div className="form__header">
                    <h1>Sign up for a new account</h1>
                    <h2>Let's get personal</h2>
                </div>
                <div className="input-group">
                    <input
                        className="input"
                        type="text"
                        placeholder="pronouns"
                        value={this.state.pronouns}
                        onChange={this.handleInput("pronouns")} />
                    </div>

                <div className="input-group">
                    <input
                         className="input"
                         type="text"
                         placeholder="jobTitle"
                         value={this.state.jobTitle}
                         onChange={this.handleInput("jobTitle")} /> 
                </div>
                <div className="input-group">
                    <input
                         className="input"
                         type="text"
                         placeholder="education"
                         value={this.state.education}
                         onChange={this.handleInput("education")} />
                </div>
                <div className="input-group">
                    <input
                         className="input"
                         type="text"
                         placeholder="interests"
                         value={this.state.interests}
                         onChange={this.handleInput("interests")} />        
                </div>
                <div className="form__submit">
                    <input
                        className="btn btn--primary"
                        type="submit"
                        value="Sign Up"
                        onClick={this.handleSignup} />  
                </div>
                <div className="form__options">
                    <p onClick={this.goBack}>
                        Go back
                    </p>
                    <p onClick={this.handleSignup}>
                        Skip for now
                    </p>
                </div>
            </form>
        )
    }
    
    // handleSignup(e) {
    //     e.preventDefault();
    //     //Sign up the user
    //     this.props.signup(this.state);
    //     // Reset the state
    //     this.setState({
    //         email: "",
    //         password: "",
    //         password2: "",
    //         fname: "",
    //         lname: "",
    //         age: "",
    //         pronouns: "",
    //         jobTitle: "",
    //         education: "",
    //         interests: "",
    //         page1: true
    //     }
    //     //Close the modal
    //     // this.toggleModal();
    // }

    // toggleModal() {
    //     //This will be used to close the modal
    //     this.props.closeModal();
    // }

    // // Render the session errors if there are any
    // renderErrors() {
    //     return (
    //         <ul>
    //             {Object.keys(this.props.errors).map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {this.props.errors[error]}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        // if(this.state.page1) {
        //     return this.getSignUpPage1();
        // } else {
        //     return this.getSignUpPage2();
        // }
        return this.getSignUpPage1();
    }
}