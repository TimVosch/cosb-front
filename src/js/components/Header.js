import React from 'react';
import ReactDOM from 'react-dom';

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
                    <a href="/" class="navbar-brand">Dracade</a>
                </div>
                
                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse" aria-expanded="false">
                        <ul class="nav in" id="side-menu">
                            <li>
                                <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}