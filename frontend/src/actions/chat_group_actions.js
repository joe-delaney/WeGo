import * as APIUtil from "../util/chat_group_api_util";
import { updateUser } from "./user_actions";

export const createChatGroup = info => dispatch => APIUtil.createChatGroup(info)
    .then(res => {
        let host  = {
            id: info.hostId,
            chatGroupId: res.data._id
        };
        let requester = {
            id: info.requesterId,
            chatGroupId: res.data._id
        };
        dispatch(updateUser(host));
        dispatch(updateUser(requester));
    })