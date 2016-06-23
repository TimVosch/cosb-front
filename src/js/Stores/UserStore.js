import { EventEmitter } from 'events';

class UserStore extends EventEmitter {
    constructor() {
        super();
        this.users = [];
    }
    
    pullNewData() {
        $.get("http://localhost:8888/api/user", (data) => {
            console.log(data);
            this.users = data.Users;
            this.emit("change");
        });
    }
    
    getUser(uuid) {
        return this.users.find(x => x.uuid == uuid);
    }
    
    getAllUsers() {
        return this.users;
    }
    
    getUsername(uuid, callback) {
        $.get("https://api.mojang.com/user/profiles/" + uuid + "/names", (data) => {
            if (data == "") {
                data = "Unknown??";
            }
            callback(uuid, data[data.length-1].name);
        });
    }
    
    addUser(name) {
        this.users.push({uuid: Date.now(), name});
        this.emit("change");
    }
}

const userStore = new UserStore;
window.userStore = userStore;
export default userStore;