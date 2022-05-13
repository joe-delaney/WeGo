import ChatGroup from "../../../models/ChatGroup";
import * as APIUtil from "../util/chat_group_api_util";
import { updateUser } from "./user_actions";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const createChatGroup = info => dispatch => APIUtil.createChatGroup(info)
    .then(res => {
        let host  = {
            id: info.hostId,
            fromHostChatGroupId: res.data._id
        };
        let requester = {
            id: info.requesterId,
            fromRequesterGroupId: res.data._id
        };
        dispatch(updateUser(host));
        dispatch(updateUser(requester));
    })

export const deleteChatGroup = chatGroup => dispatch => APIUtil.deleteChatGroup(chatGroup)
.then( res => dispatch(receiveUser(res)))