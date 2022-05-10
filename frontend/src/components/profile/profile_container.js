import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {fetchUser} from'../../actions/user_actions';

import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.user ? state.session.user.id : null
});

const mapDispatchToProps = dispatch => ({
   fetchUser: (userId) => dispatch(fetchUser(userId)),
   openModal: (modal) => dispatch(openModal(modal))
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
  