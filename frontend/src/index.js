import React from 'react';
import {createRoot} from 'react-dom/client';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import './normalize.css';
import './index.css';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
        store = configureStore(preloadedState);
        const currentTime = Date.now() / 1000;
        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/';
        }
    } else {
        store = configureStore({});
    }
    
    // Render our root component and pass in the store as a prop
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement)
    root.render(<Root store={store} />);
});