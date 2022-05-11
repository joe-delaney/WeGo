import { connect } from 'react-redux';
import { uploadPhoto } from '../../actions/user_actions';
import UploadPhotoForm from './upload_photo_form';


const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.user ? state.session.user.id : null
});

const mapDispatchToProps = dispatch => ({
    upload: photo => dispatch(uploadPhoto(photo))
});

export const UploadPhotoFormContainer = connect(mapStateToProps, mapDispatchToProps)(UploadPhotoForm);