import React from 'react';

import UserStore from '../Stores/UserStore';

export default class UserPropertiesPanel extends React.Component {
    
    constructor() {
        super();
        this.state = {
            uuid: undefined
        };
    }
    
    componentWillMount() {
        if (this.props.eventEmitter !== undefined) {
            this.props.eventEmitter.on("selectedUserChange", (uuid) => {
                this.setState({
                    uuid
                });
            });
        } 
        
        this.setState({
            uuid: this.props.uuid
        });
    }
    
    render() {
        return (
            <div class="panel panel-default">
                <div class="panel-heading">
                    <strong>User properties</strong>
                </div>
                <div class="panel-body">
                    <h3 style={{marginBottom: "5px", marginTop: "0"}}>{this.state.uuid}</h3><hr style={{marginTop: "0"}}/>
                </div>
            </div>
        );
    }
    
}