// React
import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Sentinel Panel<small><br/>We're working on it :)</small></h1>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);