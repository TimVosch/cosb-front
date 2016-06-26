import React from 'react';
import ReactDOM from 'react-dom';

import { Link, IndexLink } from 'react-router';

export default class Header extends React.Component {
    
    componentWillMount() {
        this.navStyle = { marginBottom: "0px" };
    }
    
    render() {
        return (
            <nav class="navbar navbar-default navbar-static-top" role="navigation" style={this.navStyle}>
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="/" class="navbar-brand">Corb</a>
                </div>
                
                <ul class="nav navbar-top-links navbar-right">
                </ul>
                
                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse" aria-expanded="false">
                        <ul class="nav in" id="side-menu">
                            <li><IndexLink to="/" activeClassName="active">Dashboard</IndexLink></li>
                            <li><Link to="/users" activeClassName="active">Users</Link></li>
                            <li><Link to="/authorization" activeClassName="active">Authentication</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}