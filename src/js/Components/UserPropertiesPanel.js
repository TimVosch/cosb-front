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
            this.props.eventEmitter.on("userSelect", (uuid, username) => {
                this.setState({
                    uuid,
                    username
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
                    <h3 style={{marginBottom: "5px", marginTop: "0"}}>{this.state.username}<small><br/>{this.state.uuid}</small></h3><hr style={{marginTop: "0"}}/>
                    
                    <button class="btn btn-default btn-xs pull-right" data-toggle="collapse" data-target="#crafatar-image">Toggle <span class="caret"></span></button>
                    <div id="crafatar-image" class="collapse in">
                        <img src={"https://crafatar.com/renders/body/" + this.state.uuid} class="responsive center-block" style={{maxHeight: "200px", display: (this.state.uuid !== undefined)? "block" : "none"}} />
                    </div>
                </div>
            </div>
        );
    }
    
}