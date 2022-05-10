import { connect } from "react-redux";
import EditProfile from "./edit_profile";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions";

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
    updateProfile: (user) => dispatch(updateUser(user))
})  

const EditProfileContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfile);
export default withRouter(EditProfileContainer);