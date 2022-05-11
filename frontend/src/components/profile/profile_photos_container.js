import { connect } from 'react-redux';
import { ProfilePhotos } from './profile_photos';

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  currentUserId: state.session.user ? state.session.user.id : null
});

export const ProfilePhotosContainer = connect(mapStateToProps)(ProfilePhotos);