import { connect } from 'react-redux';
import { ConversationModal } from './conversation_modal';
import { deleteChatGroup } from '../../actions/chat_group_actions';
import { createMessage, readMessage } from '../../actions/message_actions';

import {fetchUser} from'../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.entities.users[state.session.user.id],
    currentUserId: state.session.user ? state.session.user.id : null,
  })
};

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  readMessage: message => dispatch(readMessage(message)),
  deleteChatGroup: chatInfo => dispatch(deleteChatGroup(chatInfo))
});

export const ConversationModalContainer = connect(mapStateToProps, mapDispatchToProps)(ConversationModal);