import { connect } from 'react-redux';
import { deletePhoto } from '../../actions/user_actions';
import { Photo } from './photo';

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  currentUserId: state.session.user ? state.session.user.id : null
});

const mapDispatchToProps = dispatch => ({
  delete: photo => dispatch(deletePhoto(photo))
});

export const PhotoContainer = connect(mapStateToProps, mapDispatchToProps)(Photo);