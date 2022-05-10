import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import FeedIndex from "./feed/feed_index";
import ProfileContainer from './profile/profile_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import CreateActivityContainer from './activities/create_activity_container';

const App = () => (
    <Switch>
        <Route exact path="/" component={FeedIndex} />
        <Route exact path="/profile/:userId" component={ProfileContainer} />
        <Route exact path="/createActivity" component={CreateActivityContainer} />
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
);

export default App;