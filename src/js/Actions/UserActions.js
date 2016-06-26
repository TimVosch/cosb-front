import Dispatcher from '../Dispatcher';

export default {

    // Completes a user object based upon the uuid or username
    populateUser(user) {
        if (user.uuid && user.username) {
            console.error("User is missing uuid and username in populateUser()", user);
            return;
        }
        if (user.uuid) {
            $.get("https://api.mojang.com/user/profiles/" + user.uuid + "/names", (data) => {
                if (!data) {
                    console.error("No data received in populateUser()", data);
                    return;
                }
                Dispatcher.dispatch({
                    type: "DATA_MOJANG_USER_INFO",
                    user: {
                        uuid: user.uuid,
                        username: data[data.length-1].name
                    }
                })
            });
        } else if (user.username) {
             $.get("https://api.mojang.com/users/profiles/minecraft/" + user.username, (data) => {
                if (!data) {
                    console.error("No data received in populateUser()", data);
                    return;
                }
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

    getRole(user) {
        if (!user.uuid) {
            console.error("UUID is not specified on user in getRole(): ", user);
            return;
        }
    },

    pullNewData() {
        $.get("http://localhost:8000/api/user", (data) => {
            if (!data) {
                console.error("No data received in pullNewData()", data);
                return;
            }
            Dispatcher.dispatch({
                type: "DATA_REST_USER_LIST",
                users: data.Users
            });
        });
    }
}
