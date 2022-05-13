import { connect } from 'react-redux';
import { Messages } from './messages';
import {fetchUser} from'../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.entities.users[state.session.user.id],
    currentUserId: state.session.user ? state.session.user.id : null,
  })
};

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
});

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);