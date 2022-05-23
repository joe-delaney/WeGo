import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Redirect, Switch } from 'react-router-dom';
import ProfileContainer from './profile/profile_container';
import { Route } from 'react-router-dom';
import FeedIndexContainer from './feed/feed_index_container';
import SearchIndexContainer from './search/search_container';
import {MessagesContainer} from './messages/messages_container'

const App = () => (
    <>
    <Switch>
        <Route exact path="/" component={FeedIndexContainer} />
        <Route exact path="/profile/:userId" component={ProfileContainer} />
        <Route exact path="/search" component={SearchIndexContainer} />
        <Route path="/"> { <Redirect to='/' /> } </Route>
    </Switch>
    {/* <ProtectedRoute path='/' component={MessagesContainer} /> */}
    </>
    
);

export default App;