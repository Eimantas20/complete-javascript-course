// //VALUES AND VARIABLES

// let js = 'amazing';
// console.log(40 + 51 + 56);

// let firstname = 'Jonas' //Declared a variable for value;
// console.log(firstname);

// let PI = 3.1415;

// --------------------------------------------
// // DATA TYPES

// let primitives = 'number, string, boolean, null, undefined, bigint, symbols';
// let emptyValue; //this will be undefined, means 'empty value';
// let nullValue = null; //also means 'empty value'
// let symbol; // idk what values, it is unique and cannot be changed
// let bigint = BigInt; //Values larger than the Number type can hold

// let jsIsFun = true;
// console.log(jsIsFun);

// console.log( typeof true);
// console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
// //Dynamic typing
// console.log(typeof jsIsFun);
// jsIsFun = 'Made a new dynamic value from boolean to string';
// console.log(typeof jsIsFun)

// let year;
// console.log(year);
// console.log(typeof year)
// year = 1994;
// console.log(typeof year)

// console.log(typeof null)
// -------------------------------------------
// // LET, CONST AND VAR

// let age = 30;
// age = 31; //reasigning or mutated the variable

// const birthYear = 1994; //immutable variable, a variable that cannot be mutated;
// // birthYear = 2001 will through error;
// //Always try to use const - data mutation aint good - will cause bugs;

// //By not adding let, const or var we create a global object;
// createdGlobalObj = 'go it'

// myfunction = (argument) => {
//     console.log(argument)
// }
// -------------------------------------------------------------
// // BASIC OPERATORS
//Math operators
// const now = 2022
// const ageEimantas = now - 1994;
// const ageDovile = now - 2000;
// console.log(ageEimantas, ageDovile);

// console.log(ageEimantas * 2, ageEimantas / 2, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Eimantas';
// const lastName = 'Kanasevicius';
// console.log(firstName + ' ' + lastName);
// //Assigmnent operators
// let x = 10 + 5; //15
// x += 10 // x = x + 10
// x *= 4
// x++;
// x--;
// x--;
// console.log(x)
// //comparison operators - we use them to get boolean values
// console.log(ageEimantas > ageDovile); // >, <, >=, <=
// console.log(ageDovile >= 18);

// const isFullAge = ageDovile >= 18;

// console.log(now - 1994 > now - 2000)
// ----------------------------------------------------------------------------
// //OPERATORS PRECENDENCE
//Can check op precendence on mdn - highest value will be prioritized;
// const now = 2022
// const ageEimantas = now - 1994;
// const ageDovile = now - 2000;
// //why does it work -> first it does mathematical op, and then comparison op
// //It is well defined order of operator precedence;
// console.log(now - 1994 > now - 2000)

// let x, y;
// x = y = 25 - 10 - 5; // === x = y = 10;
// //assignment operator is associativity is right to left
// //so we get y = 10; and only than x assigns to value of y, which is 10
// console.log(x, y);
// //grouping with parenthesis has highest precendence;
// const averageAge = (ageEimantas + ageDovile) / 2;
// console.log(ageEimantas, ageDovile, averageAge);
// ----------------------------------------------------------------------------

// // TEMPLATE LITERALS
// const firstName = 'Eimantas';
// const job = 'junior dev';
// const birthYear = 1994;
// const year = 2022
// //old way
// const eimantas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// //ES6 template literals;
// const eimantasTL = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(eimantas);
// console.log(eimantasTL);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// ----------------------------------------------------------------------------
// // TAKING DECISION IF / ELSE STATEMENTS
// const age = 15;

// //this is called if else control structure
// if (age >= 18) {
//     console.log(`Yes, old enough`)
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Person is too youg. Wait another ${yearsLeft} years`)
// }

// const birthYear = 1994;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century)
// ----------------------------------------------------------------------------

// //TYPE CONVERSION AND COERSION
//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(Number('Eimantas'));
// console.log(typeof NaN); // NaN is a number but invalid one

// console.log(String(23), 23);

// //type coersion
// //we have diff types, string and number, but as there is plus operator
// //it triggers a coersion, number will be converted to string;
// console.log('I am ' + 23 + ' years old');
// //if JS would't had type coersion like many other languages we would have to do like so:
// console.log('I am ' + String(23) + ' years old');

// //Not all operators do type coersion to string
// console.log('23' - '10' - 3); //js converted to numbers; minus operator converts to numbers
// console.log('23' + '10' + 3); //this will give different answer as plus op converts to strings
// console.log('23' * '2'); //multiply and divide operators converts to numbers

// let n = '1' + 1; //JS will convert to string and make '11';
// n = n - 1;//and then the - op will convert string to number and we get 11 - 1
// console.log(n)

// let x = 2 + 3 + 4 +'5';
// console.log(`x = ${x}`)
// let z = '10' - '4' - '3' - 2 + '5';
// console.log(`z = ${z}`);

// ----------------------------------------------------------------------------

// // TRUTHY AND FALSY
// 5 falsy values: 0, '', undefined, null, NaN; everything else truthy
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Eimantas'));
// console.log(Boolean({}));
// // console.log(Boolean(0));

// const money = 0;

// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You have nothing to spend');
// }

// let height;
// if(height) {
//     console.log('Height is defined')
// } else {
//     console.log('Height is not defined')
// }

// ----------------------------------------------------------------------------
// // EQUALITY OPERATORS == VS ===
// const age = 18;
// if(age === 18) console.log(`Person is ${age} years old`);
// if (age == '18') console.log('Loose equality use type coersion and converted number to string ')
// //It is always better practise to use strict equal op ===. If thinking of using loose equal
// //than it is better to convert the value manually;
// const favourite = Number(prompt("what's your favourite number?"));
// console.log(typeof favourite)

// if(favourite === 20) { // '20' == 20
//     console.log('cool, 20 is amazing number')
// } else if (favourite === 7) {
//     console.log('7 is also cool number')
// } else {
//     console.log('number is not 20 or 7')
// }

// if(favourite !== 20) {
//     console.log('number is not 20')
// } else if (favourite !== 21) {
//     console.log('and it is not 21')
// }
// ----------------------------------------------------------------------------
// // BOOLEAN LOGIC: THE AND-&&, OR-|| and & NOT-! OPERATORS
// // LOGICAL OPERATORS
// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Person is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Person is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

// ----------------------------------------------------------------------------
// //SWITCH STATEMENT

// const day = 'wednesday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Learn more JS!!!');
//         break;
//     case 'tuesday':
//         console.log('Learn even more JS!!!');
//         break;
//     case 'wednesday':
//     case 'friday':
//         console.log('Not enough man, not enough...');
//         break;
//     case 'thursday':
//         console.log('Might get a cheeky drink, whatch a movie, meet friends');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Yeah, had a drink, now back to JS!');
//         break;
//     default:
//         console.log('Not valid day');
// }

// if (day === 'monday') {
//     console.log('Learn more JS!!!');
// } else if (day === 'tuesday') {
//     console.log('Learn even more JS!!!');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Not enough man, not enough...');
// } else if(day === 'friday') {
//     console.log('Might get a cheeky drink, whatch a movie, meet friends');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Yeah, had a drink, now back to JS!');
// } else {
//     console.log('not a valid day')
// }

// ----------------------------------------------------------------------------

// // STATEMENTS AND EXPRESSIONS
//Expresion - is a piece of code that produces a value
// 3 + 4 is an expression and produces a value;
// 191 is an expressin too
// true && false && !false is an expression, because at the end it will produce a valuel

//Statement - is a bigger piece of code, that is executed and it does not produce a value
//on it self. Statements are like full sentences, that translate our actions
// so that the actions we want the program to run


// A declaration is like a complete sentence
//and expression are like words that maku up the sentences;

//We write our whole programs as a sequence of actions. And these actions are statements.

// ----------------------------------------------------------------------------
// //CONDITIONAL (TERNARY) OPERATOR
//it allows us to write something like if else statement but all in one line
// const age = 27;
// age >= 18 ? console.log('Person is old enough') : console.log('w8 couple more years');
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink)

// let drink2;
// if(age>=18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }

// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// ----------------------------------------------------------------------------
