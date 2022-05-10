import React from "react";
import './form.css'

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
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
        this.props.login(this.state).then(
            ()=>{
                if(this.props.isAuthenticated === true){
                    this.props.closeModal();
                
                    this.setState({
                        email: "",
                        password: ""
                    })
                }
            }

        )

        

        
    }

    // toggleModal() {
    //     //This will be used to close the modal once implemented
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
        return (
            <div>
                <form className="form__box">
                    <div className='nav__logo'>
                        <span style={{ color: "#0071bc", fontSize: 'x-large', fontWeight: '700'}}>
                            W   
                        </span>
                        <span style={{ color: "#42b2fc"}}>
                            e  
                        </span>
                        <span style={{ color: "#3f89bb", fontSize: 'x-large', fontWeight: '700'}}>
                            G 
                        </span>
                        <span style={{ color: "#08c3fc"}}>
                            o  
                        </span>
                        <span>
                            
                        </span>

                    </div>
                    <div className='nav__slogan'>
                        Who's In?
                    </div>
                    <div onClick={this.props.closeModal} className="close-x">X</div> 
                    <div className="form__header">
                        <h1>Log in to your account!</h1>
                    </div>
                    
                <div className="input-group">
                    <input 
                            type="text" 
                            placeholder="email" 
                            value={this.state.email} 
                            onChange={this.handleInput("email")}
                            className="input"
                            />
                    </div>
                    
                    <div className="input-group">
                    <input 
                            type="password" 
                            placeholder="password" 
                            value={this.state.password} 
                            onChange={this.handleInput("password")}
                            className="input"
                            />
                    </div>
                    <div className="form__submit">
                        <input 
                            className="btn btn--primary"
                            type="submit" 
                            value="Login" 
                            onClick={this.handleLogin}/>

                    </div>

                </form>
                {/* {this.renderErrors()} */}
            </div>
        )
    }
}