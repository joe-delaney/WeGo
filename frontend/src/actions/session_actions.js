import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT,
});

export const receiveCurrentUser = data => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: data.currentUser,
    user: data.user
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const resetErrors = () => {
    return ({
        type: RESET_ERRORS
    });
};


export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false);
    // Dispatch a logout action
    dispatch(logoutUser());
};

// Upon signup, set the session token and dispatch the current user. Dispatch errors on failure.
export const signup = user => dispatch => {
    return APIUtil.signup(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser({
            currentUser: decoded,
            user: res.data.user}))
    }).catch(err => {
        dispatch(receiveErrors(err.response.data));
})};

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser({
            currentUser: decoded,
            user: res.data.user
        }))
    }).catch(err => {
        dispatch(receiveErrors(err.response.data));
}));