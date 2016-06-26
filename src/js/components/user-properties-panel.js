import React from 'react';

export default class UserPropertiesPanel extends React.Component {
    
    constructor() {
        super();
        this.state = {
            user: {
                uuid: undefined,
                username: undefined,
                role: undefined
            }
        };
    }
    
    componentWillMount() {
        if (this.props.eventEmitter !== undefined) {
            this.props.eventEmitter.on("selected-user-change", (user) => {
                this.setState({user});
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
                <div class="panel-body" style={{display: (!this.state.user.uuid && !this.state.user.username)? "none":"block"}}>
                    <h3 style={{marginBottom: "5px", marginTop: "0"}}>{this.state.user.username}<small><br/>{this.state.user.uuid}</small></h3><hr style={{marginTop: "0"}}/>
                    <button class="btn btn-default btn-xs pull-right" data-toggle="collapse" data-target="#crafatar-image">Toggle <span class="caret"></span></button>
                    <div id="crafatar-image" class="collapse in">
                        <img src={"https://crafatar.com/renders/body/" + this.state.user.uuid} class="responsive center-block" style={{maxHeight: "200px", display: (this.state.user.uuid !== undefined)? "block" : "none"}} />
                        <hr/>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <strong>User role:</strong>
                        </div>
                        <div class="col-sm-6">
                            {(this.state.user.role || "N/A")}
                        </div>                    
                    </div>
                    <div class="row">
                        
                    </div>
                </div>
            </div>
        );
    }
    
}