import Dispatcher from '../Dispatcher';

export default {
    
    // Completes a user object based upon the uuid or username
    selectUser(user) {
        if (user.uuid) {
            $.get("https://api.mojang.com/user/profiles/" + uuid + "/names", (data) => {
                if (data == "") return;
                Dispatcher.dispatch({
                    type: "DATA_MOJANG_USER_INFO",
                    user: {
                        uuid,
                        username: data[data.length-1].name
                    }
                })
            });
        } else if (user.username) {
             $.get("https://api.mojang.com/users/profiles/minecraft/" + value, (data) => {
                if (data == "") return;
                Dispatcher.dispatch({
                    type: "DATA_MOJANG_USER_INFO",
                    user: {
                        uuid: data.id,
                        username: data.name
                    }
                })
            });
        }
    },

    pullNewData() {
        $.get("http://localhost:8888/api/user", (data) => {
            if (data == "") return;
            console.log(data);
            Dispatcher.dispatch({
                type: "DATA_REST_USER_LIST",
                users: data.Users
            });
        });
    }
}