import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = user => dispatch => APIUtil.fetchUser(user)
    .then(user => dispatch(receiveUser(user)));

export const updateUser = user => dispatch => APIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)));
