import { connect } from 'react-redux';
import {fetchUser} from'../../actions/user_actions';

import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
   fetchUser: (userId) => dispatch(fetchUser(userId))
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
  