// // //VALUES AND VARIABLES

// let country = 'Lithuania';
// let continent = 'Europe';
// let population = 2795000;

// // console.log(country, continent, population);
// -------------------------------------------------
// // // Data Types

// let isIsland = false;
// let language;

// console.log(typeof isIsland, typeof population, typeof country, typeof language)
// --------------------------------------------------------
// // // let, const var

// const language = 'lithuanian';
// language  = 'lithuanian'; //TypeError: Assigmnent to constant variable
// -----------------------------------------------------------------
// //BASIC OPERATORS;

// const lithuaniaPopulation = 3000000;
// const homeCountry = 'Lithuania';
// const language = 'lithuanian';

// let halfLithuaniaPopulation = lithuaniaPopulation / 2;
// halfLithuaniaPopulation++;
// console.log(halfLithuaniaPopulation);

// const finlandPopulation = 6000000;
// console.log(finlandPopulation > lithuaniaPopulation);

// const averageCountryPopulation = 33000000;
// console.log(averageCountryPopulation > lithuaniaPopulation);
// const description = homeCountry + ' is in Europe, and its ' + lithuaniaPopulation + ' people speak ' + language;

// console.log(description)
// -------------------------------------------------------------------------------

// // CODING CHALLENGE #1;

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

// const calculateBMI = (weight, height) => weight / height ** 2;
// const bmiMark = calculateBMI(weightMark, heightMark);
// const bmiJohn = calculateBMI(weightJohn, heightJohn);
// const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHigherBMI);

// function functionBMI(weight, height) {
//     return weight / height ** 2
// }

// const bmiMark2 = functionBMI(weightMark, heightMark);
// const bmiJohn2 = functionBMI(weightJohn, heightJohn);
// const markHigherBMI2 = bmiMark > bmiJohn;

// console.log(bmiMark2, bmiJohn2, markHigherBMI2);

// -------------------------------------------------------------------------------
// //STRINGS AND TEMPLATE LITERALS
// const lithuaniaPopulation = 3000000;
// const homeCountry = 'Lithuania';
// const language = 'lithuanian';

// const description = `${homeCountry} is in Europe, and its ${lithuaniaPopulation} people speak ${language}`

// console.log(description);

// -------------------------------------------------------------------------------
// // TAKING DECISIONS: IF / ELSE STATEMENT

// const lithuaniaPopulation = 3000000;
// const avgPopulation = 33000000;
// let decision;
// if (lithuaniaPopulation > avgPopulation) {
//     decision = 'Lithuanias population is above average'
// } else {
//     decision = `Lituanias population is ${avgPopulation - lithuaniaPopulation} below average`
// }
// console.log(decision);

// // CODING CHALLENGE #2;
// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

// const calculateBMI = (weight, height) => weight / height ** 2;
// const bmiMark = calculateBMI(weightMark, heightMark);
// const bmiJohn = calculateBMI(weightJohn, heightJohn);
// const markHigherBMI = bmiMark > bmiJohn;

// let highestBMI;

// if (bmiMark > bmiJohn) {
//     highestBMI = `Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`;
// } else {
//     highestBMI = `John's BMI (${bmiJohn})  is higher than Mark's BMI (${bmiMark})`
// }

// console.log(highestBMI)
// -------------------------------------------------------------------------------
// //TYPE CONVERSION AND COERSION
// console.log('9' - '5');//4
// console.log('19' - '13' + '17'); //'617'
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57);// false because types are not same
// console.log(5 + 6 + '4' + 9 -4 -2); //1143

// -------------------------------------------------------------------------------
// //EQUALITY OPERATORS == vs ===
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
// if (numNeighbours === 1) {
//     console.log('Only 1 border')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('no borders')
// }
// //we have to use Number() method because value returned from the input is a string,
// //and === equality operator is a strict e.o. and it does not perform type coersion;
// -------------------------------------------------------------------------------
// // BOOLEAN LOGIC: THE AND, OR and & NOT OPERATORS
// const desiredCountryLanguage = 'English';
// const desiredCountryPopulation = 50000000;
// const desiredCountryNotIsland = true;
// const lithuaniaPopulation = 3000000;
// const homeCountry = 'Lithuania';
// const language = 'English';
// const lithuaniaIsIsland = false;

// if (desiredCountryLanguage === language && desiredCountryPopulation > lithuaniaPopulation && !lithuaniaIsIsland) {
//     console.log('yes, she wants to come here')
// } else {
//     console.log('no she does not')
// }
// -------------------------------------------------------------------------------
// // CODING CHALLENGE #3;

// const averageDolphinsScore = (96 + 108 +89) / 3;
// const averageKoalasScore = (88 + 91 + 110) / 3;

// const averageDolphinsScore = (97 + 112 + 101) / 3;
// const averageKoalasScore = (109 + 95 + 123) / 3;

// const averageDolphinsScore = (97 + 112 + 101) / 3;
// const averageKoalasScore = (109 + 95 + 106) / 3;

// console.log(`Dolphins ${averageDolphinsScore} Koalas ${averageKoalasScore}`)
// if(averageDolphinsScore > averageKoalasScore) {
//     console.log('Dolphins WON')
// } else if(averageDolphinsScore < averageKoalasScore) {
//     console.log('Koalas WON')
// } else {
//     console.log('It is a tie!')
// }

// if(averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
//     console.log('Dolphins WON')
// } else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= 100) {
//     console.log('Koalas won trophy')
// } else if (averageDolphinsScore === averageKoalasScore && averageDolphinsScore >= 100 && averageKoalasScore>=100) {
//     console.log('Both wins!')
// } else {
//     console.log('no one wins')
// }

// -------------------------------------------------------------------------------

// // SWITCH STATEMENT
// const language = 'lithuanian';

// switch(language) {
//     case 'lithuanian':
//         console.log('Lietuviu kalba');
//         break;
//     case 'chinese':
//     case 'mandarin':
//         console.log('Most number of native speakers');
//         break;
//     case 'spanich':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great lang too');
//         break;
// }

// ----------------------------------------------------------------------------
// //CONDITIONAL (TERNARY) OPERATOR
// const lithuaniaPopulation = 3000000;

// console.log(`Lithuanias population is ${lithuaniaPopulation > 33000000 ? 'greater' : 'smaller'} than 33 million`)

// -------------------------------------------------------------------------------

// // CODING CHALLENGE #3;
// const bill = 430;
// const tip = bill >=50 && bill <=300 ? 15 : 20;
// console.log(`bill of ${bill} will have a tip of ${tip}%, and final bill is ${bill + (bill * (tip / 100)) }`)

// -------------------------------------------------------------------------------
