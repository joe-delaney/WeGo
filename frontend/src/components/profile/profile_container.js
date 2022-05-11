import { connect } from 'react-redux';
import { fetchActivities } from '../../actions/activity_actions';
import { openModal } from '../../actions/modal_actions';
import {fetchUser} from'../../actions/user_actions';

import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.user ? state.session.user.id : null,
    activitiesFetched: Object.values(state.entities.activities).length
});

const mapDispatchToProps = dispatch => ({
   fetchUser: (userId) => dispatch(fetchUser(userId)),
   openModal: (modal, data) => dispatch(openModal(modal, data)),
   fetchActivities: () => dispatch(fetchActivities())
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
  