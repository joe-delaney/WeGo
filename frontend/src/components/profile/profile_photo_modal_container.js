import { connect } from "react-redux";
import ProfilePhotoModal from "./profile_photo_modal";

const mapStateToProps = state => ({
    imgPath: state.ui.modalInfo
})

const ProfilePhotoModalContainer = connect(mapStateToProps, null)(ProfilePhotoModal);
export default ProfilePhotoModalContainer;