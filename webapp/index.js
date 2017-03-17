import React        from 'react';
import ReactDOM     from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Layout       from './components/layout';
import Dashboard    from './components/dashboard';

ReactDOM.render(
    <Router histoty={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Dashboard}></IndexRoute>
        </Route>
    </Router>
    , document.getElementById('app'));