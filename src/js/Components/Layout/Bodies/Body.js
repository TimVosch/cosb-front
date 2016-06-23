import React from 'react';

import Header from '../Header';

export default class Body extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div class="wrapper">
                <Header/>
                <div id="page-wrapper" style={{minHeight: (window.innerHeight-51) + "px"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}