import React from 'react';
import { EventEmitter } from 'events';

import Dispatcher from '../../../Dispatcher';

import UserActions from '../../../Actions/UserActions';
import UserStore from '../../../Stores/UserStore';

import UserListPanel from '../../UserListPanel';
import UserPropertiesPanel from '../../UserPropertiesPanel';
import UserSearchPanel from '../../UserSearchPanel';

export default class UsersBody extends React.Component {
    
    constructor() {
        super();
        this.eventEmitter = new EventEmitter;
        this.state = {
            selectedUser: {
                uuid: undefined,
                username: undefined
            }
        }
    }
    
    componentWillMount() {
        Dispatcher.register((data) => {
            console.log("DISPATCH: ", data);
            switch(data.type) {
                case "DATA_MOJANG_USER_INFO":
                    if (this.state.selectedUser.uuid == data.user.uuid
                            || this.state.selectedUser.username.toLowerCase() == data.user.username.toLowerCase()) {
                                this.setState({selectedUser:data.user});
                                this.eventEmitter.emit("selected-user-change", data.user);
                            }
                    break;
                case "DATA_REST_USER_LIST":
                    this.eventEmitter.emit("user-list-change", data.users);
                    break;
            }
        });
    }
    
    onUserSelect(user) {
        console.log("onUserSelect", user);
        this.setState({selectedUser:user});
        UserActions.populateUser(user);
    }
    
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="page-header">Minecraft users</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-lg-8 hidden-sm">
                        <UserListPanel onUserSelect={this.onUserSelect.bind(this)} onRefreshClick={UserActions.pullNewData.bind(UserActions)} eventEmitter={this.eventEmitter}/>
                    </div>
                    <div class="col-sm-12 col-lg-4">
                        <UserSearchPanel onUserSelect={this.onUserSelect.bind(this)} eventEmitter={this.eventEmitter}/>
                        <UserPropertiesPanel onUserSelect={this.onUserSelect.bind(this)} eventEmitter={this.eventEmitter}/>
                    </div>
                </div>
            </div>
        )
    }
}