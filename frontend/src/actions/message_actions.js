import * as APIUtil from '../util/message_api_util'

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const createMessage = message => dispatch => APIUtil.createMessage(message)
    .then(user => dispatch(receiveUser(user)));

export const readMessage = messageInfo => dispatch => APIUtil.readMessage(messageInfo)
    .then(user => dispatch(receiveUser(user)));