import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import FeedIndex from "./feed/feed_index"

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={FeedIndex} />
    </Switch>
);

export default App;