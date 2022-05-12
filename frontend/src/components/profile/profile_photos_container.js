import { connect } from 'react-redux';
import { ProfilePhotos } from './profile_photos';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  currentUserId: state.session.user ? state.session.user.id : null
});

export const ProfilePhotosContainer = connect(mapStateToProps, null)(ProfilePhotos);