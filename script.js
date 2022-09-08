//let bill = 275;
//let bigTip = bill / 100 * 20;
//let smallTip = bill / 100 * 15;
//let finalValue1 = bill + smallTip;
//let finalValue2 = bill + bigTip;

//let tip = bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${smallTip}, and the final value was ${finalValue1}`) : console.log(`The bill was ${bill}, the tip was ${bigTip}, and the final value was ${finalValue2}`);

/////////////////////////////

//const lasku = 275;
//const tippi = lasku <= 300 && lasku >= 50 ? lasku * 0.15: lasku * 0.20;

//console.log(`The bill was ${lasku}, the tip was ${tippi}, and the final value was ${lasku + tippi}`);

///////////////////////////////

// function calcAge(birthYear, firstName){
//  const age = 2022 - birthYear;
//  console.log(`${firstName} is ${age} years old`);
//  return age;
// }

// const age = calcAge(1986, "Niko");
// const age1 = calcAge(1985, "Anniina");
// Voisitko toimia???

// const calcAverage = (a,b,c) => (a+b+c) / 3;
// //test1
// const dolphins = calcAverage(44,23,71);
// const koalas = calcAverage(65,54,49);

// //test2
// // const dolphins = calcAverage(85,54,41);
// // const koalas = calcAverage(23,34,27);

// const checkWinner = function(averageDolphins, averageKoalas){
//     if(averageDolphins >= 2 * averageKoalas){
//         console.log(`Dolphins won! (${dolphins} vs. ${koalas})`);
//     }else if(averageKoalas >= 2 * averageDolphins){
//         console.log(`Koalas won! (${koalas} vs. ${dolphins})`);
//     }else{
//         console.log(`No one won. (Dolphins ${dolphins}pts vs. Koalas ${koalas}pts)`);
//     }
// }

// checkWinner(dolphins, koalas);

////////////////////////////

// const friend1 = 'Mikaeli';
// const friend2 = 'Stepheni';
// const friend3 = 'Pete';

// const friends = ['Mikaeli','Stepheni', 'Pete'];
// console.log(friends);

// const years = new Array(1234,3454,4567,7594);
// console.log(years[0]);

// const calcAge = function (birthYear){
//     return 2022 - birthYear;
// }

// const years = [1986,1896,1456,2003,2018];

// console.log(calcAge(years[0]));

// const friends = ['Mikaeli','Stepheni', 'Pete'];
// //add elements
// friends.push('Hemmo');
// friends.unshift('Harri');
// //remove elements
// friends.pop();
// friends.shift();

// console.log(friends);

//////////////////////////////

// const calcTip = (a) => {
//     if(a >= 50 && a <= 300) {
//         return Math.floor((a * 1.15 - a) * 100) / 100
//     } 
//     return Math.floor((a * 1.2 - a) * 100) / 100
// }
// calcTip(125)

// const bills = [1, 2, 3];
// const tips = bills.map(bill => calcTip(bill));
// const totals = bills.map((bill, index) => Math.floor((bill + tips[index])*100)/100);

// console.log(bills, tips, totals);

//////////////////////////////

// const niko = {
//     firstName: 'Niko',
//     lastName: 'Alander',
//     age: 2022 - 1986,
//     hobby: 'None'
// };

// const anniina = {
//     firstName: 'Anniina',
//     lastName: 'Alander',
//     age: 2022 - 1985,
//     hobby: 'None'
// };

// if(niko.age > anniina.age) {
//     console.log(`Niko on vanhempi (${niko.age})`);
// } else if (anniina.age > niko.age) {
//     console.log(`Anniina on vanhempi (${anniina.age})`);
// } else {
//     console.log(`Olette saman ikäisiä (${niko.age} vs. ${anniina.age})`);
// }

// const iat = niko.age > anniina.age ? console.log(`Niko on vanhempi (${niko.age})`) : console.log(`Anniina on vanhempi (${anniina.age})`);

// if(niko.firstName.length > anniina.firstName.length) {
//     console.log(`Nikon nimi on pidempi (${niko.firstName})`);
// } else if (anniina.firstName.length > niko.firstName.length) {
//     console.log(`Anniinan nimi on pidempi (${anniina.firstName})`);
// } else {
//     console.log(`Molempien nimet ovat yhtä pitkät (${niko.firstName} vs. ${anniina.firstName})`);
// }

// const nimet = niko.firstName.length > anniina.firstName.length ? console.log(`Nikon nimi on pidempi (${niko.firstName})`) : console.log(`Anniinan nimi on pidempi (${anniina.firstName})`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2032 - 1986,
//     friends: ["Michael", "Peter", "Steven"]
// }

// console.log(`"${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}"`);

/////////////////////

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // },

//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // },

//     // calcAge: function () {
//     // this.age = 2037 - this.birthYear;
//     // return this.age;
//     // },

//     // getSummary: function () {
//     //     return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence.`
//     // }
// }

// // console.log(jonas.calcAge());
// // console.log(jonas.age);

// console.log(jonas.getSummary());

/////////////////////////////

// for (let toisto = 0; toisto <= 10; toisto++) {
//     console.log(`Lifting weights repetition ${toisto}`);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven']
// ];
