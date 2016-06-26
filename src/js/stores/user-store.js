import { EventEmitter } from 'events';

class UserStore extends EventEmitter {
    constructor() {
        super();
        this.users = [];
    }
    
    getUser(uuid) {
        return this.users.find(x => x.uuid == uuid);
    }
    
    getAllUsers() {
        return this.users;
    }
    
}

const userStore = new UserStore;
export default userStore;