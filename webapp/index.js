import React                from 'react';
import ReactDOM             from 'react-dom';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Layout               from './components/Layout';
import Home                 from './components/Home';

ReactDOM.render(
    <Router histoty={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
        </Route>
    </Router>
, document.getElementById('app'));