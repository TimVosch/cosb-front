
import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Body, DashboardBody, UsersBody, AuthorizationBody } from './Components/Layout/Bodies';

const app = document.getElementById('app');
ReactDOM.render(
            <Router history={hashHistory}>
                <Route path="/" component={Body}>
                    <IndexRoute component={DashboardBody}/>
                    <Route path="/users" component={UsersBody}/>
                    <Route path="/authorization" component={AuthorizationBody}/>
                </Route>
            </Router>
, app);