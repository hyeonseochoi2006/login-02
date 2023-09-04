"use strict";

const id = document.querySelector("#nameInput"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("#btn")


loginBtn = addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    
    fetch("/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(req)
    })
        .then ((res) => res.json())
        .then((res) => {

        });
}