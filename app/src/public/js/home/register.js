"use strict";

const id = document.querySelector("#nameInput"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    comfirmPsword = document.querySelector("#confrim-psword"),
    registerBtn = document.querySelector("#btn");


registerBtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert ("아이디를 입력해주세요");
    if (psword.value !== comfirmPsword.value)return alert("비밀번호가 일치 하지 않습니다");
    
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        
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
            location.href = "/login";
        } else {
            if (res.err) return alert (res.err)
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
}   
