import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Body from './Body';
import DashboardBody from './Bodies/Dashboard';
import AboutBody from './Bodies/About';

export default class Layout extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Body}>
                    <IndexRoute component={DashboardBody}/>
                    <Route path="/About" component={AboutBody}/>
                </Route>
            </Router>
        );
    }
}