"use strict";

// function calcAge(birthYear) {
//     const age = 2022-birthYear;

//     function printAge(){
//         const output = `${firstName} you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996){
//             const str = `Oh, you are a millenial ${firstName}`
//         }

//     }
//     printAge();

//     return age;
// }

// const firstName = 'Niko';
// calcAge(1986);
// //console.log(age);
// //printAge();

//////////////////////////////////////

// const myName = 'Niko';

// if (myName === 'Niko') {
//     console.log(`Jonas is a ${job}`);
//     const age = 2022 - 1986;
//     console.log(age);
//     const job = 'teacher';
//     console.log(x);
// }

////////////////////////////////////

// //variables
// console.log(me);
// //console.log(job);
// //console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1986;

//functions

// console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// function addDecl(a,b) {
//     return a + b;
// }

// const addExpr = function(a,b) {
//     return a + b;
// }

// const addArrow = (a,b) => a+b;

////////////////////////////////

// const calcAge = function(birthYear){
//     console.log(2022- birthYear);
//     console.log(this);
// }
// calcAge(1986);

// const calcAgeArrow = birthYear => {
//     console.log(2022-birthYear);
//     console.log(this);
// }
// calcAgeArrow(1986);

// const jonas = {
//     year: 1986,
//     calcAge: function(){
//         console.log(this);
//         console.log(2022 - this.year);
//     }
// }

// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

//////////////////////////////

// //thats why you not use var
// var firstName = "Matilda";

// const jonas = {
//    firstName: "Jonas",
//    year: 1986,
//    calcAge: function () {
//       //console.log(this);
//       console.log(2022 - this.year);

//solution1
// const self = this; //self or that
// const isMillenial = function() {
//     console.log(this);
//     //console.log(this.year >= 1981 && this.year <=1996);
//     console.log(self.year >= 1981 && self.year <=1996);
// }

//solution2
//       const isMillenial = () => {
//          console.log(this);
//          console.log(this.year >= 1981 && this.year <= 1996);
//       };
//       isMillenial();
//    },

//    greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();

// //arguments keyword
// const addExpr = function (a, b) {
//    console.log(arguments);
//    return a + b;
// };

// addExpr(2, 5);

// var addArrow = (a, b) => {
//    console.log(arguments);
//    return a + b;
// };

// addArrow(2, 5, 8);

///////////////////////////

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Jonas',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me);

///////////////////////////////

// //primitive types
// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName);

// //reference types
// const jessica = {
//    firstName: "Jessica",
//    lastName: "Williams",
//    age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before marriage:", jessica);
// console.log("After marriage:", marriedJessica);
// // marriedJessica = {};

// //copying objects
// const jessica2 = {
//    firstName: "Jessica",
//    lastName: "Williams",
//    age: 27,
//    family: ["Alice", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Davis";

// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");

// console.log("Before marriage:", jessica2);
// console.log("After marriage:", jessicaCopy);

///////////////////////////////////////

