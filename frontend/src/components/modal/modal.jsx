import React from "react";
import SignupContainer from "../session/signup_form_container";
import LoginContainer from "../session/login_form_container";
import './modal.css'

const Modal = ({modal, closeModal}) => {
    // debugger
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case "singup":
            component = <SignupContainer />
            break;
        case "login":
            component = <LoginContainer />
            break;
        default:
            return null;
    };

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

export default Modal;

