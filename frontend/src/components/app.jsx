import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import ProfileContainer from './profile/profile_container';
import { Route } from 'react-router-dom';
import FeedIndexContainer from './feed/feed_index_container';

const App = () => (
    <Switch>
        <Route exact path="/" component={FeedIndexContainer} />
        <Route exact path="/profile/:userId" component={ProfileContainer} />
        {/* <Route exact path="/find/" component={searchContainer} /> */}
    </Switch>
);

export default App;