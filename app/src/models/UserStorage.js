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
}

module.exports = UserStorage;