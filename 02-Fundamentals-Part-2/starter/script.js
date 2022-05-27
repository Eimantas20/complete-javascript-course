'use strict';
// // ACTIVATING STRICT MODE

// let hasDriverLicense = false;
// const passTest = true;

// // if(passTest) hasDriverLicens = true; // this error without strict mode will not be shown,JS will stop executing
// if(hasDriverLicense) console.log('I can drive')

// // const interface = 'Audio'; // this word is reserved so cannot be used
// // const private = 524//same with this one, strict mode reserves this word

// -----------------------------------------------------------------------------

// // FUNCTIONS

// function logger() { //function declaration
//     console.log('reusing code multiple times');
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const juice = fruitProcessor(1,3);
// console.log(juice)

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// -----------------------------------------------------------------------------
// // FUNCTION DECLARATION VS EXPRESSION

//function declaration
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }

// const age1 = calcAge1(1994);

// //function expression (expression produces a value!!!), or anonymous function
// const calcAge2 = function(birthYear) {
//     return 2022 - birthYear;
// }
// //calcAge2 variable VALUE is an expression and expressions produce VALUE.
// //so calcAge2 variable will hold function value
// const age2 = calcAge2(1994)

// console.log(age1, age2)

// -----------------------------------------------------------------------------

// // ARROW FUNCTIONS

//converting this function expression to arrow arrow function
// const calcAge2 = function(birthYear) {
//     return 2022 - birthYear;
// }

// //one liner
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1994)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1994, 'Eimantas'));
// console.log(yearsUntilRetirement(2000, 'Dovile'))

// -----------------------------------------------------------------------------

// // FUNCTIONS CALLING OTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3))

// -----------------------------------------------------------------------------

// // REVIEWING FUNCTIONS

// const calcAge = function(birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;

//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1994, 'Eimantas'));
// console.log(yearsUntilRetirement(1950, 'John'));


// -----------------------------------------------------------------------------

// // DATA STRUCTURE - ARRAYS (object is as well a data structure)

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Thomas';

// const friends = ['Michael', 'Steven', 'Thomas'];
// console.log(friends);

// const yearsTest = new Array(1991, 1841, 2051, 2020, 'asda');

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Smith'
// console.log(friends);

// let firstName = 'Eimantas'
// const diffArr = [firstName, 'K', 2022 - 1994, friends]
// console.log(diffArr)


// const calcAge = (birthYear) => {
//     return 2022 - birthYear;
// }

// const years = [1990, 1925, 2001, 2010, 2022];

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages)
// -----------------------------------------------------------------------------

// //BASIC ARRAY OPERATIONS (METHODS)
// const friends = ['Michael', 'Steven', 'Thomas'];
// //adding elements
// const newLength = friends.push('Kristy'); //push methods returns new array length
// console.log(friends, newLength);

// friends.unshift('Will');//unshift method as well returns a new length of array
// console.log(friends)

// //taking out elements
// const removedLastFriend = friends.pop();//pop will remove last element from array, so doesn't need an arg;
// //pop method returns a removed element;
// console.log(friends, removedLastFriend)

// const firstArrFriend = friends.shift();//removes first item from array and returns it
// console.log(friends, firstArrFriend)

// console.log(friends.indexOf('Thomas')) //indexOf returns index at which element is located7
// console.log(friends.indexOf('Not a friend'));// if it doesn't find a match it will return -

// //includes is similar to indexOf but it will return a boolean. ES6
// console.log(friends.includes('Thomas'))
// console.log(friends.includes('Bobby'))
// //includes uses strict equality
// friends.push(25);
// console.log(friends.includes(25));//returns true
// console.log(friends.includes('25'));//returns false
// //we can use includes to write conditionals!!!
// if(friends.includes('Thomas')) {
//     console.log('You have a friend called Thomas')
// }

// -----------------------------------------------------------------------------

// // DATA STRUCTURE OBJECTS

// const obj = {
//     firstName: 'Eimantas',
//     lastName: 'Kanasevicius',
//     age: 2020-1994,
//     job: 'Developer',
//     friends: ['Thom', 'Will', 'Sarah']
// }
// //Retrieving data dot and bracket notation;

// console.log(obj.lastName);
// console.log(obj['firstName']);

// const nameKey = 'Name';
// console.log(obj['first' + nameKey]);
// console.log(obj['last' + nameKey]);

// let interestIn = prompt('get data');


// if (obj[interestIn]) {
//     console.log(obj[interestIn]);
// } else {
//     console.log('try again');
// }


// obj.location = 'Lithuania';
// obj['insta'] = '@get the insta';
// console.log(obj)

// //Challenge
// console.log(`${obj.firstName} has ${obj.friends.
//     length} friends, and his best friend is called ${obj.
//         friends[obj.friends.length - 2]}`)

// -----------------------------------------------------------------------------

// //OBJECT METHODS

// const obj = {
//     firstName: 'Eimantas',
//     lastName: 'Kanasevicius',
//     birthYear: 1994,
//     job: 'Developer',
//     friends: ['Thom', 'Will', 'Sarah'],
//     hasDriverLicence: false,
//     // calcAge: function(birthYear) {
//     //     return 2022 - birthYear
//     // }

//     // calcAge: function() {
//     //     return 2022 - this.birthYear
//     //     //we could do obj.birthYear, BUT if we'd change the obj name for some reason,
//     //     //or assign it to diff value(deep copy) the method wouldn't work anymore
//     //     //and might only confuse - hence why, when we want to use something specifically
//     //     //from the object with current method we use THIS keyword
//     // }

//     calcAge: function() {
//         this.age = 2022 - this.birthYear;
//         return this.age;//if we don't want to we may not return the age
//         //so that we calculate the age, but we dont return it;
//     },
//     getSummary: function() {
//         return this.summary =  `${this.firstName} is a ${this.calcAge()} years old ${this.
//             job} and he has ${this.hasDriverLicence ? 'a' : 'no'} driver license.`
//     }


// }
// console.log(obj.age);

// console.log(obj.calcAge());
// console.log(obj.age);
// console.log(obj.summary);
// console.log(obj.getSummary());
// console.log(obj.summary);


// console.log(obj['calcAge'](obj.birthYear));

// -----------------------------------------------------------------------------

// //ITERATION: THE FOR LOOP

//for loop keeps running while condition is true
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights, repetition ${rep}`)
// }

// -----------------------------------------------------------------------------

// //LOOPING ARRAYS, BREKING AND CONTINUING
// const obj = [
//     'Eimantas',
//     'Kanasevicius',
//     2020-1994,
//     'Developer',
//     ['Thom', 'Will', 'Sarah'],
//     false
// ];

// const types = [];
// for(let i = 0; i < obj.length; i++) {
//     // types[i] = typeof obj[i];
//     types.push(typeof obj[i]);
// }
// console.log(types)

// const years = [1991, 1994, 1999, 2010, 2022];
// let ages = [];
// for(let i = 0; i < years.length; i++) {
//     ages.push(2022-years[i]);
// }

// console.log(ages)

// //continue and break
// console.log('only strings-----')
// for (let i = 0; i < obj.length; i++) {
//     if(typeof obj[i] !== 'string') continue;
//     console.log(obj[i], typeof obj[i])
// }
// console.log('break when number-----')

// for (let i = 0; i < obj.length; i++) {
//     if (typeof obj[i] === 'number') break;
//     console.log(obj[i], typeof obj[i])
// }

// -----------------------------------------------------------------------------

// // LOOPING BACKWARDS AND LOOPS IN LOOPS
// const obj = [
//     'Eimantas',
//     'Kanasevicius',
//     2020-1994,
//     'Developer',
//     ['Thom', 'Will', 'Sarah'],
//     false
// ];

// for(let i = obj.length - 1; i >= 0; i--) {
//     console.log(i, obj[i])
// }

// for(let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`------starging exercise ${exercise}----------`);
//     for (let rep = 1; rep < 6; rep++) {
//         if(rep === 3) continue
//         console.log(`Exercuse ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// -----------------------------------------------------------------------------

// // WHILE LOOP

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights, repetition ${rep}`)
// }

// let rep = 1;
// while(rep <= 10) {
//     console.log(`WHILE: Lifting weights, repetition ${rep}`);
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) +1
// while(dice !== 6) {
//     console.log(dice)
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('Loop is about to end...')
// }
// -----------------------------------------------------------------------------

