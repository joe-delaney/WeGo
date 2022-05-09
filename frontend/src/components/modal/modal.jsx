import React from "react";
import './modal.css'
import SignupFormContainer from "../../components/session/signup_form_container";
import LoginFormContainer from "../../components/session/login_form_container";

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case "signup":
            component = <SignupFormContainer />
            break;
        case "login":
            component = <LoginFormContainer />
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

