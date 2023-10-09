"use strict"
//은닉화 
class UserStorage {
    static #users = {
        id: ["hy"],
        psword: ["1234"],
        name: ["현서"]

    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) =>{
            if (users.hasOwnProperty(fields)){
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id)
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {})

        return userInfo
    }
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;