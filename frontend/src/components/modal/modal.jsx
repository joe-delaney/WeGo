import React from "react";
import SignupContainer from "../session_form/signup_form_container";
import CreatePostContainer from '../posts/create_post_container'
import EditPostContainer from '../posts/edit_post_container'
import DeletePostContainer from '../posts/delete_post_container'
import DeleteCommentContainer from '../comments/delete_comment_container'
import EditProfileContainer from '../profile/edit_profile_container'

const Modal = ({modal, closeModal}) => {
    // debugger
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.type) {
        case "create_user":
            component = <SignupContainer />
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

