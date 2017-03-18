import React            from 'react';
import ReactDOM         from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, History } from 'react-router';

import Layout       from './components/layout';
import Dashboard    from './components/dashboard';
import About        from './components/about';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path="/about" component={About}></Route>
        </Route>
    </Router>
    , document.getElementById('app'));