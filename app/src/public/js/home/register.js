"use strict";

const id = document.querySelector("#nameInput"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    comfirmPsword = document.querySelector("#confrim-psword"),
    registerBtn = document.querySelector("#btn");


registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        comfirmPsword: comfirmPsword.value,
    };
    console.log(req)
    
    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "https://studiumhome.com";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });
}   
