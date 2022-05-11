import { connect } from "react-redux";
import EditProfileAvatar from "./edit_profile_avatar";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { updateUserWithForm } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
    let pathnameComponents = ownProps.location.pathname.split("/");
    let userId = pathnameComponents[pathnameComponents.indexOf('profile') + 1];
    let user = userId ? state.entities.users[userId] : undefined;
    
    return {
        user: user,
        currentUserId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateProfile: (formData) => dispatch(updateUserWithForm(formData))
})  

const EditProfileAvatarContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfileAvatar);
export default withRouter(EditProfileAvatarContainer);