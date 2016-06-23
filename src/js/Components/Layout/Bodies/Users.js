import React from 'react';
import { EventEmitter } from 'events';

import UserStore from '../../../Stores/UserStore';

import UserListPanel from '../../UserListPanel';
import UserPropertiesPanel from '../../UserPropertiesPanel';
import UserSearchPanel from '../../UserSearchPanel';

export default class UsersBody extends React.Component {
    
    constructor() {
        super();
        this.selectedUserEventEmitter = new EventEmitter;
    }
    
    onUserSelect(uuid, username) {
        if (username === undefined) {
            UserStore.getUsername(uuid, this.onUserSelect.bind(this));
        }
        this.selectedUserEventEmitter.emit("userSelect", uuid, username);
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
                    {/*I want this to be hidden on mobile and have them use a search bar instead*/}
                    <div class="col-sm-12 col-lg-8">
                        <UserListPanel onUserSelect={this.onUserSelect.bind(this)}/>
                    </div>
                    <div class="col-sm-12 col-lg-4">
                        <UserSearchPanel onUserSelect={this.onUserSelect.bind(this)} eventEmitter={this.selectedUserEventEmitter}/>
                        <UserPropertiesPanel eventEmitter={this.selectedUserEventEmitter}/>
                    </div>
                </div>
            </div>
        )
    }
}