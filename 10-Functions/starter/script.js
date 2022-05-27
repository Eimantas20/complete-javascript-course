'use strict';
// Lecture 128 functions - default arguments
// const bookings = [];

// const createBooking = function (
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers
// ) {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 512);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 700);

// // PASSING ARGS TO A FUNCTION: VALUE VS REFERENCE
// const flight = 'LH521';
// const passenger = {
//     name: 'Eimantas Kanasevicius',
//     passport: 152451521,
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr.' + passenger.name;

//     if (passenger.passport === 152451521) {
//         alert('Check in');
//     } else {
//         alert('Wrong passport');
//     }
// };

// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);
// };
// // We manipulate the passenger obj so our checkIn function displays alert of 'Wrong passport'
// newPassport(passenger);
// checkIn(flight, passenger);

// ===================================================================================
// // FIRST-CLASS AND HIGHER-ORDER FUNCTIONS

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher order fn
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//     console.log('Hi');
// };

// document.body.addEventListener('click', high5);

// ['Eimantas', 'Dovile', 'Rugile'].forEach(high5);

// //OKAY fuck it, my own example of abstraction and hogher order fn
// const myFirstClass = () => {
//     console.log('First class has been called');
// };

// const higherOrder = fn => {
//     console.log('higherOrderFn');
//     fn();
// };
// higherOrder(myFirstClass);

// // Functions returning functions

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey');
// greeterHey('Eimantas');
// greeterHey('Thomas');

// greet('Hello')('Jonas');

// const greetArrowFn1 = greeting => {
//     return name => {
//         console.log(`Arr fn ${greeting} ${name}`);
//     };
// };

// const greetArrowFn2 = greeting => name =>
//     console.log(`One liner Higher Order fn with ${greeting} ${name}`);

// greetArrowFn1('Labas')('JS');
// greetArrowFn2('Wabadabadoo')('JS');

// ===================================================================================

// THE CALL AND APPLY METHODS

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function() {}
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     },
// };

// lufthansa.book(239, 'Eimantas');
// lufthansa.book(521, 'Mikeee');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;
// //DOES NOT WORK!!! this is not available in regular functions
// // book(23, 'Matt');

// // Call method
// book.call(eurowings, 23, 'Matt');
// console.log(eurowings);

// book.call(lufthansa, 215, 'John');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Airline',
//     iataCode: 'LX',
//     bookings: [],
// };

// book.call(swiss, 587, 'Harry');

// // Apply method
// const flightData = [999, 'Phill'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);

// // Bind method
// //so instead this
// // book.call(eurowings, 23, 'Matt');
// //we do this:(and the return will be NEW function, but it will not get called!!!)
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookXL = book.bind(swiss);
// bookEW(111, 'Steven');

// // Binding with partial application:
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Kristy');
// bookEW23('Steven');

// // Other use cases of bind method(when we use object together with eventListeners):
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };

// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // === addVAT = value => value + value * 0.23
// console.log(addVAT(200));
// console.log(addVAT(100));

// const addTaxManual = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     };
// };
// console.log('-----------------------------------------');
// const addVAT2 = addTaxManual(0.23);
// console.log(addVAT2);
// console.log(addVAT2(100));

// console.log(addTaxManual(0.23)(100));

//==================================================
// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
//This is function expression which can be used multiple times
// const string = 'string';
// const canRunMoreThanOnce = () => {
//     console.log(`This can run multiple times ${string}`);
// };

// canRunMoreThanOnce();
// canRunMoreThanOnce();
// //this is IIFE which can only be used ONCE
// // same as other functions it has it's own scope and hence we can't acces
// // newStr var outside of it
// (function () {
//     const newStr = 'sdas';
//     console.log(`can run ONLY once ${(string, newStr)}`);
// })();

// console.log(newStr);

//==================================================
// CLOSURES
// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(secureBooking);
// console.dir(booker);

/*
-> A closure is the closed-over VARIABLE ENVIRONMENT of the execution context IN WHOCH A FUNCTION WAS CREATED,
even AFTER that execution context is gone;

-> A closure gives function access to all the variables of its parent function, 
even after that parent function has returned. the function keeps a REFERENCE to its outer scope,
which PRESERVES the scope chain throughout time.

less formal

-> A closure makes sure that a function doesn't loose connection to VARIABLES THAT EXISTED
AT THE FUNCTION'S BIRTH PLACE;

less formal

-> A closure is like a BACKPACK that a function carries around wherever it goes. 
This backpack has all the VARIABLES THAT WERE PRESENT IN THE ENVIRONMENT
WHERE THE FUNCTIO WAS CREATED.
*/

// // MORE CLOSURE EXAMPLES
// // example 1
// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     };
// };
// g();
// f();
// console.dir(f);

// //re-assigning f function
// h();
// f();
// console.dir(f);

// // example 2

// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(9, 2);
