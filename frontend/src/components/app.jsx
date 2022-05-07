import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { TestComponent } from './test';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={TestComponent} />
    </Switch>
);

export default App;