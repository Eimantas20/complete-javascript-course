'use strict';

// //FUNCTIONS (function declarations)
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const countryDescription = describeCountry('Lithuania', 3, 'Vilnius');
// console.log(countryDescription)

// -----------------------------------------------
// // FUNCTION DECLARATIONS VS EXPRESSIONS
// const totalPopulation = 7900000000
// function percentageOfWorld1(population) {
//     return (population * 100) / totalPopulation
// }

// const chinaPop = percentageOfWorld1(1441000000);
// const lithuaniaPop = percentageOfWorld1(3000000);
// const ukrainePop = percentageOfWorld1(44130000)
// console.log(chinaPop, lithuaniaPop, ukrainePop);

// const percentageOfWorld2 = function(population) {
//     return (population * 100) / totalPopulation
// }

// const chinaPop2 = percentageOfWorld2(1441000000);
// const lithuaniaPop2 = percentageOfWorld2(3000000);
// const ukrainePop2 = percentageOfWorld2(44130000)
// console.log(chinaPop2, lithuaniaPop2, ukrainePop2);

// -----------------------------------------------

// // ARROW FUNCTIONS
// const totalPopulation = 7900000000

// const percentageOfWorld3 = population => (population * 100) / totalPopulation
// const chinaPop3 = percentageOfWorld3(1441000000);
// const lithuaniaPop3 = percentageOfWorld3(3000000);
// const ukrainePop3 = percentageOfWorld3(44130000)
// console.log(chinaPop3, lithuaniaPop3, ukrainePop3);

// -----------------------------------------------

// // FUNCTIONS CALLING OTHER FUNCTIONS
// const totalPopulation = 7900000000
// function percentageOfWorld1(population) {
//     return (population * 100) / totalPopulation
// }

// const describePopulation = (country, population) => {
//     const partOFWorld = percentageOfWorld1(population)
//     return `${country} has ${population / 1000000} million people, which is about ${partOFWorld}% of the world`;
// }

// console.log(describePopulation('Lithuania', 3000000));
// console.log(describePopulation('Fiji', 896444));
// console.log(describePopulation('United States', 329500000));

// -----------------------------------------------
// // CHALLANGE #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // const dolphinsAvg = calcAverage(44, 23, 71);
// // const koalasAvg = calcAverage(65, 54, 49);

// const dolphinsAvg = calcAverage(85, 54, 41);
// const koalasAvg = calcAverage(23, 34, 27);

// const checkWinner = (dolphinsAvg, koalasAvg) => {
//     console.log(dolphinsAvg, koalasAvg)
//     if(dolphinsAvg >= koalasAvg * 2) {
//         console.log(`Dolphins are winners with score of ${dolphinsAvg} vs ${koalasAvg}`)
//     } else if (koalasAvg >= dolphinsAvg * 2) {
//         console.log(`Koalas are winners with score of ${koalasAvg} vs ${dolphinsAvg}`);
//     } else {
//         console.log('No one won');
//     }
// }

// checkWinner(dolphinsAvg, koalasAvg);

// -----------------------------------------------

// // INTRODUCTION TO ARRAYS

// const populations = [3000000, 896444, 329500000, 67390000];

// populations.length === 4 ? console.log(true) : console.log(false);

// const totalPopulation = 7900000000;
// const  percentageOfWorld1 = (population) => {
//     return (population * 100) / totalPopulation
// }
// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ]
// console.log(percentages)

// -----------------------------------------------

// //BASIC ARRAY OPERATIONS (METHODS)

// const neighbours = ['Latvija', 'Lenkija', 'Rusija', 'Baltarusija'];
// neighbours.push('Utopia');
// neighbours.pop();

// if(neighbours.includes('Germany')) console.log('Probably not a central Europe country');

// neighbours[neighbours.indexOf('Rusija')] = 'Some other country'
// console.log(neighbours)

// // CHALLANGE #2

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

// const totalPrice = (bill) => {
//     const tip = calcTip(bill)
//     return bill + tip
// }
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [totalPrice(bills[0]), totalPrice(bills[1]), totalPrice(bills[2])];

// console.log(tips)
// console.log(totals)

// -----------------------------------------------

// // INTRODUCTION TO OBJECTS

// const country = {
//     countryName: 'Denmark',
//     capital: 'Kopenhagen',
//     language: 'danish',
//     population: 5831000,
//     neighbours:[
//         'Germany',
//         'Sweden'
//     ]
// }
// // DOT BS BRACKET NOTATION

// console.log(`${country.countryName} has ${country
//     .population / 1000000} million ${country.
//         language}-speaking people, ${country.
//         neighbours.length} neighbouring countries and a capital called ${country['capital']}`)

// country.population = country.population + 2000000;
// country['population'] = country['population'] - 2000000;
// console.log(country)
// -----------------------------------------------

// //OBJECT METHODS
// const country = {
//     countryName: 'Denmark',
//     capital: 'Kopenhagen',
//     language: 'danish',
//     population: 5831000,
//     neighbours:[
//         'Germany',
//         'Sweden'
//     ]
// }

// country.describe = function() {
//     console.log(`${this.countryName} has ${this.population / 1000000} million ${this.
//     language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this['capital']}`)
// }
// country.describe();

// -----------------------------------------------

// // CHALLANGE #3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95
// };

// function calcBmi() {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
// }
// console.log(mark)
// mark.calcBmi = calcBmi;
// john.calcBmi = calcBmi;

// mark.calcBmi();
// john.calcBmi()

// console.log(`${john.fullName.split(' ')[0]}'s BMI (${john.BMI}) is ${john.
//     BMI > mark.BMI ? 'higher' : 'lower'} than ${mark.fullName.split(' ')[0]}'s (${mark.BMI})`)

// -----------------------------------------------

// //ITERATION: THE FOR LOOP

// for(let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`)
// }

// -----------------------------------------------

// // LOOPING ARRAYS, BREAKING AND CONTINUING

// const totalPopulation = 7900000000;
// const populations = [3000000, 896444, 329500000, 67390000];
// const percentages2 = [];

// const percentageOfWorld1 = (population) => {
//     return (population * 100) / totalPopulation
// }
// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ]
// console.log(percentages)

// for(let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]))
// }
// console.log(percentages2);

// for (let i = 0; i < percentages.length; i++) {
//     if (percentages[i] !== percentages2[i]) break;
//     console.log(`array element ${i} is equal on both arrays`)
// }


// -----------------------------------------------

// // LOOPING BACKWARDS AND LOOPS IN LOOPS

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ]

// for (let y = 0; y < listOfNeighbours.length; y++) {
//     for(let x = 0; x < listOfNeighbours[y].length; x++) {
//         console.log(`Neighbour: ${listOfNeighbours[y][x]}`)
//     }
// }
// -----------------------------------------------

// // WHILE LOOP

// const totalPopulation = 7900000000;
// const populations = [3000000, 896444, 329500000, 67390000];

// const percentageOfWorld1 = (population) => {
//     return (population * 100) / totalPopulation
// }
// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ]
// console.log(percentages)

// const percentages2 = [];
// for(let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]))
// }
// console.log(percentages2);
// //check if both percentage arrays are the same
// for (let i = 0; i < percentages.length; i++) {
//     if (percentages[i] !== percentages2[i]) break;
//     console.log(`array element ${i} is equal on both arrays`)
// }
// let x = 0;
// const percentages3 = [];
// while (x < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[x]))
//     x++;
// }

// console.log(percentages3)


// -----------------------------------------------

// // CODING CHALLANGE #4
// const bills = [
//     22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
// ]
// const tips = [];
// const totals = [];

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// let x = 0;
// while(x < bills.length) {
//     tips.push(calcTip(bills[x]));
//     totals.push(bills[x] + tips[x])
//     x++;
// }

// const calcAvg = arr => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length
// }

// console.log(tips)
// console.log(totals)
// console.log(calcAvg(totals));
