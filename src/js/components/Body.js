import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends React.Component {
    
    constructor() {
        super();
        this.style = {};
    }
    
    componentWillMount() {
        this.style = { minHeight: (window.innerHeight-51) + "px"};
    }
    
    render() {
        return (
            <div id="page-wrapper" style={this.style}>
            body
            </div>
        )
    }
}