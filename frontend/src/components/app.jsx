import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import FeedIndex from "./feed/feed_index";
import ProfileContainer from './profile/profile_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
    <Switch>
        <Route exact path="/" component={FeedIndex} />
        <Route exact path="/profile" component={ProfileContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
);

export default App;