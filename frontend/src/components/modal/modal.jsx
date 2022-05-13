import React from "react";
import './modal.css'
import SignupFormContainer from "../../components/session/signup_form_container";
import LoginFormContainer from "../../components/session/login_form_container";
import EditProfileContainer from "../profile/edit_profile_container";
import EditProfileAvatarContainer from "../profile/edit_profile_avatar_container"
import CreateActivityContainer from "../activities/create_activity_container";
import ShowActivityContainer from "../activities/show_activity_container";
import ProfilePhotoModalContainer from "../profile/profile_photo_modal_container";

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
        case "editProfile":
            component = <EditProfileContainer />
            break;
        case "editProfileAvatar":
            component = <EditProfileAvatarContainer />
            break;
        case "createActivity":
            component = <CreateActivityContainer/>
            break;
        case "showActivity":
            component = <ShowActivityContainer/>
            break;
        case "showPhoto":
            component = <ProfilePhotoModalContainer/>
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

