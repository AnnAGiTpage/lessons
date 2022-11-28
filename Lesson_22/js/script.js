//Comment
/* Multiple
comment */

//My practice
"use strict";

// const userName = `I am Anna`;
// console.log(userName);
// console.log(typeof userName);

// let userAge;
// userAge = 25;
// console.log(userAge);
// console.log(typeof userAge); 

// let userAim = `Learning JS`;
// console.log(userAim);

// let userInfo;
// userInfo = `Name: ${userName}, Age: ${userAge}, Goal: ${userAim}`;
// console.log(userInfo);
// console.log(typeof userInfo);


// JavaScript Scope (visibility) / Function scope

let userResult;

if (1 + 1) {
    userResult = 'success';
    console.log(userResult);

    let userAlt = 'or';
    console.log(userAlt);

    if (1 + 0) {
        let userResult2 = 'fail';
        console.log(userResult2);
    }
};

//Constant value
const COLOR_PINK = '#ffc0cb';
console.log(COLOR_PINK);


const mainInfo = {
    name:'Name',
    age: 'Age',
    message: 'comment'
};
console.log(mainInfo);
console.log(typeof mainInfo);


// Video 3 home task (variables and constants values)
//1
const USER_EYES_COLOR = 'green';
console.log(USER_EYES_COLOR);
//2
let user;
let nameUser = 'Vasya';
user = nameUser;
console.log(user);

// Video 4 home task (JavaScript data types and data structures)
let userAge = 36;
let userInfo = { Фрилансер: userAge};
console.log(userInfo);
console.log(typeof userInfo);

let userHeight = 145 / 0;
console.log(typeof userHeight);
console.log(userHeight);

let userName;
console.log(typeof userName);

let userSize = "45" / "8";
console.log(typeof userSize);

