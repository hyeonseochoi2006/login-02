"use strict";

const UserStorage = require("./UserStorage")

class User {
    constructor(body){
        this.body = body
    }

    async login() {
        const client = this.body;

        // Check if client is defined and has necessary properties
        if (!client || !client.id || !client.psword) {
            console.error("Invalid client data. Login failed.");
            return { success: false, msg: "아이디를 입력해 주세요" };
        }

        try {
            const { id, psword } = await UserStorage.getUserInfo(client.id);

            if (id) {
                if (id === client.id && psword === client.psword) {
                    return { success: true };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않은 아이디입니다." };
        } catch (err) {
            console.error(err);
            return { success: false, err };
        }
    }
 
    async register() {
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, err};
        
        } 
    }
}


module.exports = User