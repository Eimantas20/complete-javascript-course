'use strict';

// const test = string => {
//     const a = 25;
//     console.log(string);
//     test2();
// };

// function test2() {
//     // console.log(args, as);
//     console.log(a);
//     // let number = 0;
//     // const number1 = 1;
//     // var number2 = 2;
// }

// test('dasd');

// const state = true;
// if (state) {
//     const testMe = function () {
//         console.log('Bloody yest');
//     };
//     //     let number = 0;
//     //     const number1 = 1;
//     //     var number2 = 2;
// }
// -----------------------------------------------------------
// SCOPING IN PRACTISE

// function calcAge(birthYear) {
//     const age = 2022 - birthYear;
//     console.log(firstName);
//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             //This is different scope - so str takes new value, if not provides it
//             //goes out to new scopes to find the needed one;
//             const firstName = 'Matt';
//             const str = `Oh, you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//             //we redefined a variable value that we accessed value so that's why we have new value in console
//             output = 'New Output!';
//             // Now we declare a new variable which is going to be in if block context
//             //so logging output at row 54 is asctually a full sentence , because this is in child scope
//             // const output = 'New Output!';
//         }
//         console.log(output);
//         // add(2, 3);
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1994);

// console.log(age); NOT DEFINED!!!
// printAge(); NOT DEFINED!!!
//global scope doesn't have access to any other variable scope!!!

// -----------------------------------------------------------

// //HOISTING AND TDZ PRACTICE

// console.log(me);
// console.log(job); //value is still in TDZ - temporal dead zone
// console.log(year);
// var me = 'Eimantas';
// let job = 'Programmer';
// const year = 1994;

//fucntions:

// //will get function value as using function declaration var env initial value will be function itself
// console.log(addDeclaration(2, 3));
// //will get "addExpression is not a function"  because on the moment it's being called
// //  value is undefined and so undefined is not a function and yet
// // we still try undefined(2, 3)
// console.log(addExpression(2, 3));
// //will get "Can't access before initialization"
// console.log(addExpressionAarrowFunction(2, 3));

// function addDeclaration(a, b) {
//     return a + b;
// }

// var addExpression = function (a, b) {
//     return a + b;
// };

// const addExpressionAarrowFunction = (a, b) => a + b;

//PITFALL!!!(this is one simple example)
//the deleteShoppingCart will get executed because at the time the numProducts initial state
//is actually undefined, which is false value
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted');
// }

// //using var it will also create additional property on a global window object
// //and this can have some implications(sunkumai) in some cases
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// -----------------------------------------------------------

// // THIS KEYWORD IN PRACTISE LESSON  97

// console.log(this);
// console.log(this);
// const calcAge = function (birthYear) {
//     console.log(2022 - birthYear);
//     console.log(this);
// };

// calcAge(1994);

// const calcAgeArrow = birthYear => {
//     console.log(2022 - birthYear);
//     console.log(this);
// };

// calcAgeArrow(1994);

// const eimantas = {
//     year: 1994,
//     calcAge: function () {
//         console.log(this);
//         console.log(2022 - this.year);
//     },
// };

// eimantas.calcAge();

// const matilda = {
//     year: 2015,
// };
// //this keyword now points to matilda, even though the method is written in different obj.
// //So this keyword always points to object CALLING the method
// matilda.calcAge = eimantas.calcAge;
// matilda.calcAge();

// const f = eimantas.calcAge;
// // this is now a regular function call, it is not attached to any object,
// // so it becames like calcAge a regular function therefore this is now udefined and we get error.
// f();

// -----------------------------------------------------------

// // THIS KEYWORD PITFALLS IN REGULAR VS ARROW FUNCTION
// // const eimantas = {
// //     firstName: 'Eimantas',
// //     year: 1994,
// //     calcAge: function () {
// //         console.log(this);
// //         console.log(2022 - this.year);
// //     },
// //     greet: () => console.log(`Hey ${this.firstName}`),
// // };
// // console.log(eimantas.calcAge());
// // // We get "Hey undefined" because arrow function doesn't get their own this keyword and
// // // the obj 'eimantas' is NOT a code block hence way it does NOT create it's own scope
// // //eimantas obj is an object literal
// // eimantas.greet();

//And now if create variable using 'var' firstName and we will get "Hey Matilda"
//this is because it adds this variable to a global window object.
//so it's like this.firstName === window.firstName

// var firstName = 'Dovile';

// const eimantas = {
//     firstName: 'Eimantas',
//     year: 1994,
//     calcAge: function () {
//         console.log(this);
//         console.log(2022 - this.year);
//     },
//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// // eimantas.calcAge();
// eimantas.greet();

//Another pitfall of this keyword when using a function inside of a method

// const eimantas = {
//     firstName: 'Eimantas',
//     year: 1994,
//     calcAge: function () {
//         console.log(this);
//         console.log(2022 - this.year);

//         //SOLUTION 1
//         const self = this; //self or that
//         const isMillenial = function () {
//             console.log(this);
//             //By using this.year we get value of undefined because
//             //this is a new function and it gets his own this with value of undefined
//             //value undefined because this is a regular function.
//             // console.log(this.year >= 1981 && this.year <= 1996);

//             //But we can save this to a const outside current function to get this of calcAge method
//             //and now our self is equal to previous this through a scope chain
//             console.log(self.year >= 1981 && self.year <= 1996);
//         };
//         isMillenial();

//         //SOLUTION2
//         const isMillenial2 = () => {
//             //So this will work and have value of calcAge method this value, because arrow function
//             //instead of creating this variable it will use it from parent scope
//             //Arrow functions INHERITS the this key from parents scope
//             console.log(this);
//             console.log(self.year >= 1981 && self.year <= 1996);
//         };
//         isMillenial2();
//     },
//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// eimantas.calcAge();

//ARGUMETNS!!!!!

// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 4, 5);

// const addArrow = (a, b) => {
//     //will throw error of arguments not defined because it is not a regular function
//     // console.log(arguments);
//     return a + b;
// };

// addArrow(2, 4, 5);

// -------------------------------------------------------------------
// //  PRIMITIVES VS OBJECTS (PRIMITIVE VS REFERENCE TYPES)
// CALL STACK(execution context) and HEAP

//Primitive types
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

//Reference types
// const me = {
//     name: 'Eimantas',
//     age: 27,
// };

// const friend = me;

// friend.age = 27;
// console.log('friend', friend);
// console.log('me', me);

// -------------------------------------------------------------------
//Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName);
// console.log(oldLastName);

// //Reference types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };
// //both these objects hold same memmory address in the heap as they both
// //hold the same memory address in the stack
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage', marriedJessica);

//we cant do(jess is equal to this new empty object):
// marriedJessica = {}
// because this new object will be stored a new address(position) in memory ant therefore
//a refence to the that position in memory will have to change in this var - that's why it doesn't work
//we cannot change the value to a new momory address

// // COPYING AN OBJECT SO THAT WE COULD HAVE TO SEPARATE

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Thom'],
};
//assign --> merges two objects and returns a new one OooooO
//we merge an empty new object with jessica2 and it will return a completelly new object
// BUT it works on first level - SHALLOW COPY
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

//A new object was in fact created in the HEAP and jessicaCopy is now pointing to that reference
console.log('Before marriage:', jessica2);
console.log('After marriage', jessicaCopy);

// if we have object inside the object - then the inner object will
//still be the same, it will still point to the SAME PLACE IN MEMORY
//So Object.assign() - only creates a SHALLOW copy and not a DEEP CLONE
jessicaCopy.family.push('Martin');
jessicaCopy.family.push('John');

//both objects (jessica2 and jessicaCopy has a property called family which points at the same object
// in the memory heap and that object is the family array)
//if we change the array in one of them, it will change in the other one as well
//lodash is external library which could help making deep copies.
console.log('Before marriage:', jessica2);
console.log('After marriage', jessicaCopy);
