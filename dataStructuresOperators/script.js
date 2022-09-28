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

   order(starterIndex, mainIndex) {
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

   orderPizza: function (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   },
};

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name

const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email
const email = "hello@jonas.io";
const loginEmail = "Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = "288,97£";

/////////////////////////////////////

// //working with strings part 1
// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//    //B and E are middle seats
//    const s = seat.slice(-1);

//    s === "B" || s === "E" ? console.log("You got middle seat") : console.log("You got lucky!");

//    if (s === "B" || s === "E") console.log("You got middle seat");
//    else console.log("You got lucky");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));

/////////////////////////////////////////////
//Maps iteration

// const question = new Map([
//    ['question', 'What is the best programming language in the world?'],
//    [1,'C'],
//    [2,'Java'],
//    [3,'JavaScript'],
//    ['correct', 3],
//    [true, 'Correct'],
//    [false, 'Try again'],
// ])
// console.log(question);

// //convert object to map
// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours))
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('your answer'));
// // console.log(answer);

// // console.log(question.get(question.get('correct') === answer));

// //convert map to array
// console.log(...question);
// // console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());

////////////////////////////////
//Maps: fundamentals
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

// rest
//    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//    .set("open", 11)
//    .set("close", 23)
//    .set(true, "We are open :)")
//    .set(false, "We are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// // rest.clear();

// const arr = [1,2];
// rest.set(arr, "Test");
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

////////////////////////////////////////

// const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic bread');
// ordersSet.add('Garlic bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('jonasschmedtmann').size);

/////////////////////////////////////////////////

// //property NAMES
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//    openStr += `${day}, `
// }
// console.log(openStr);

// // property VALUES
// const values = Object.values(restaurant.openingHours);
// // console.log(...values);

// //Entire object
// const entries = Object.entries(restaurant.openingHours);
// // console.log(entries);

// // [key, value]
// for (const [key, {open, close}] of entries) {
//    console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// //if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days) {
//    const open = restaurant.openingHours[day]?.open ?? 'closed';
//    console.log(`On ${day}, we open at ${open}`);
// }

// //methods
// console.log(restaurant.order?.(0,1) ?? 'Method does no exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does no exist');

// //arrays
// const users = [{ name:'Jonas', email: 'hello@jonas.io'}];
// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//    console.log(`${i+1}: ${el}`);
// }

// console.log([menu.entries()]);

// const rest1 = {
//    name: 'Capri',
//    numGuests: 20,
// }

// const rest2 = {
//    name: 'La Piazza',
//    owner: 'Giovanni Rossi',
// }

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&='<ANONYMOUS>';
// rest2.owner &&='<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// //use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// //practical example
// if (restaurant.orderPizza) {
//    restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.order('mushrooms', 'spinach');

// //destructuring

// //SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(pizza, risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2)functions
// const add = function (...numbers) {
//    let sum = 0;
//    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//    console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23,5,7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

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
