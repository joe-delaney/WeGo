import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import ProfileContainer from './profile/profile_container';
import { Route } from 'react-router-dom';
import FeedIndexContainer from './feed/feed_index_container';
import CreateActivityContainer from './activities/create_activity_container';

const App = () => (
    <Switch>
        <Route exact path="/" component={FeedIndexContainer} />
        <Route exact path="/profile/:userId" component={ProfileContainer} />
        <Route exact path="/create" component={CreateActivityContainer} />
    </Switch>
);

export default App;