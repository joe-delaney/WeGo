import * as APIUtil from "../util/chat_group_api_util";
import { createMessage } from "./message_actions";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const createChatGroup = info => dispatch => APIUtil.createChatGroup(info)
    .then(chatGroup => {
        let message  = {
            senderId: info.requesterId,
            hostId: info.hostId,
            chatGroupId: chatGroup.data.id,
            text: `Hi, I'd love to join you for ${info.activityName}`
        };
        dispatch(createMessage(message));
    })

export const deleteChatGroup = chatGroup => dispatch => APIUtil.deleteChatGroup(chatGroup)
.then( res => dispatch(receiveUser(res)))