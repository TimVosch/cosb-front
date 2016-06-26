import React from 'react';

export default class UserListPanel extends React.Component {
    
    constructor() {
        super();
        this.state = { users:[]};
    }
    
    componentWillMount() {
        if (this.props.eventEmitter !== undefined) {
            this.props.eventEmitter.on("user-list-change", (users) => {
                this.setState({users});
            });
        } 
    }
    
    // Fired when the select button is pressed
    onUserSelectClick(uuid) {
        if (this.props.onUserSelect)
            this.props.onUserSelect({uuid});
    }
    
    onRefreshClick() {
        if (this.props.onRefreshClick)
            this.props.onRefreshClick();
    }
    
    render() {
        return (
            <div class="panel panel-default">
                <div class="panel-heading">
                    <strong>User list</strong>
                    <div class="pull-right">
                        <a class="btn btn-default btn-xs" onClick={this.onRefreshClick.bind(this)}>R</a>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="table-responsive" style={{overflowX: "visible", overflowY: "visible"}}>
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Database ID</th>
                                    <th>Unique User ID</th>
                                    <th>Username</th>
                                    <th style={{textAlign:"right"}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*Loops through all the users in the current state*/}
                                { this.state.users.map(function(user) {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.uuid}</td>
                                            <td>{user.createdAt}</td>
                                            <td style={{textAlign:"right"}}><button class="btn btn-success" onClick={this.onUserSelectClick.bind(this, user.uuid)}>Select</button></td>
                                        </tr>
                                    );
                                }.bind(this))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    
}