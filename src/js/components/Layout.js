import React from "react";
import ReactDOM from "react-dom";

import Header from './Header';
import Body from './Body';

export default class Layout extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <Header/>
                <Body/>
            </div>
        );
    }
}