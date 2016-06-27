import React from 'react';

export default class UsersearchPanel extends React.Component {
    
    constructor() {
        super();
        this.state = {
            user: {
                uuid: undefined,
                username: "None"
            }
        }
        this.searchTimout = undefined;
    }
    
    componentWillMount() {
        // Bind to the EventEmitter on props if available
        if (this.props.eventEmitter !== undefined) {
            this.props.eventEmitter.on("selected-user-change", (user) => {
                this.setState({user});
            });
        } 
    }
    
    searchInputChanged(e) {
        var username = e.target.value;
        if (username == "") return;
        
        if (this.searchTimout !== undefined) {
            clearTimeout(this.searchTimout);
        }
        this.searchTimout = setTimeout(() => {
                this.searchTimout = undefined;
                this.props.onUserSelect({username});
            }, cosb.config.autoSearchDelay);
    }
    
    render() {
        return (
            <div class="panel panel-default">
                <div class="panel-heading"><strong>Search user</strong></div>
                <div class="panel-body">
                    <div class="input-group">
                        <div class="input-group-addon">Username: </div>
                        <input type="text" class="form-control" onChange={this.searchInputChanged.bind(this)} />
                    </div>
                    <div class="row" style={{marginTop: "5px"}}>
                        <div class="col-sm-4"><strong>Username</strong></div>  
                        <div class="col-sm-8">{this.state.user.username}</div>                    
                    </div>
                    <div class="row">
                        <div class="col-sm-4"><strong>UUID</strong></div>  
                        <div class="col-sm-8">{this.state.user.uuid || "None"}</div>                    
                    </div>
                </div>
            </div>
        );
    }
    
}