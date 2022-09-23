"use strict";

// Data needed for a later exercise
const flights =
   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
   name: "Classico Italiano",
   location: "Via Angelo Tavanti 23, Firenze, Italy",
   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
   mainMenu: ["Pizza", "Pasta", "Risotto"],

   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0, // Open 24 hours
         close: 24,
      },
   },

   order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },

   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
      console.log(
         `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`
      );
   },

   orderPasta: function (ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
   },
};

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, ,risotto,...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

// restaurant.orderDelivery({
//    time: "22:30",
//    address: "Via del sole, 21",
//    mainIndex: 2,
//    starterIndex: 2,
// });

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //iterables: arrays, strings, ,maps, sets. NOT objects
// const str = "Jonas";
// const letters = [...str, " ", "S."];
// console.log(letters);
// // console.log(`${...str} Schmedtmann`); NOT like this

// //real world experiment
// const ingridients = [
//    // prompt("Let's make pasta! Ingridient 1?"),
//    // prompt("Ingridient 2?"),
//    // prompt("Ingridient 3?")
// ];

// console.log(ingridients);
// restaurant.orderPasta(...ingridients);

// //objects
// const newRestaurant = {
//    foundedIn: 1998,
//    ...restaurant,
//    founder: "Guiseppe",
// };
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

////////////////////////

// //destructing Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const {
//    fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////////////////

// //destructing arrays
// const arr = [12, 34, 56];
// const [a, b, c] = arr;
// console.log(a, b, c);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //receive 2 return values from function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [1, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i,j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 1, q = 1, r = 1] = [8, ];
// console.log(p, q, r);

////////////////////////////////////
