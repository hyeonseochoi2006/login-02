"use strict";

const id = document.querySelector("#nameInput"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("#btn")

console.log(id);

loginBtn = addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    }
}