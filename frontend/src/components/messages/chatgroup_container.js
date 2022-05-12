import { connect } from 'react-redux';
import { Chatgroup } from './chatgroup';

import {fetchUser} from'../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.entities.users[state.session.user.id],
    currentUserId: state.session.user ? state.session.user.id : null,
  })
};

const mapDispatchToProps = dispatch => ({
  
});

export const ChatgroupContainer = connect(mapStateToProps, mapDispatchToProps)(Chatgroup);