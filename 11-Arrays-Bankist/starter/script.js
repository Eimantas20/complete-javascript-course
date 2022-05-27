'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = (movements, sort = false) => {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = ` 
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
                <div class="movements__value">${mov}€</div>
            </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = acc => {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance} €`;
};

const calsDisplaySummary = acc => {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, income) => acc + income, 0);

    const outcome = Math.abs(
        acc.movements
            .filter(mov => mov < 0)
            .reduce((acc, income) => acc - income, 0)
    );

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter(interest => interest > 1)
        .reduce((acc, income) => acc + income, 0);

    labelSumIn.textContent = `${incomes}€`;
    labelSumOut.textContent = `${outcome}€`;
    labelSumInterest.textContent = `${interest}€`;
};

const createUserNames = function (accs) {
    accs.forEach(acc => {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};

createUserNames(accounts);

const updateUI = acc => {
    // Display movements
    displayMovements(acc.movements);
    // Display balance
    calcDisplayBalance(acc);
    // Display summary
    calsDisplaySummary(acc);
};

//Event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display ui n welcome message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;
        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiverAcc &&
        amount <= currentAccount.balance &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Doing transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);
    if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= amount * 0.1)
    ) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
        currentAccount.username === inputCloseUsername.value &&
        currentAccount.pin === Number(inputClosePin.value)
    ) {
        const userIndexToDelete = accounts.findIndex(
            acc => acc.owner === currentAccount.owner
        );
        accounts.splice(userIndexToDelete, 1);
        containerApp.style.opacity = 0;
        inputCloseUsername.value = inputClosePin.value = '';
        labelWelcome.textContent = 'Login to get started';
    }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// // SLICE - create new array given one
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// // always last element of array
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// // shallow copy of arr
// console.log(arr.slice());
// // or
// console.log([...arr]);

// // SPLICE - mutates original arr
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// // REVERSE - mutates original arr
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// NEW ARRAY AT METHOD
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //at method solves the problem of taking last item from the array
// //several way:
// console.log(arr[arr.length - 1]);
// // or:
// console.log(...arr.slice(-1));
// // or:
// console.log(arr.slice(-1)[0]);
// //and a new way with at method
// console.log(arr.at(-1));

// console.log('eimantas'.at(5));
//------------------------------------------------------------------------------------------
// LOOPING ARRAYS: forEach METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }
// console.log('----forEach-------');
// movements.forEach(function (movement, i, arr) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// });

// forEach WITH MAPS AND SETS
// with MAP
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
//     // map will be whole object
// });

// //with SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//     //set doesn't have keys, so forEach creators made all three args if declared be same as first one
//     console.log(`${key}: ${value}`);
// });

// CHALLENGE #1
/*Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
 */

// const juliaData = [3, 5, 2, 12, 7];
// const kateDate = [4, 1, 15, 8, 3];

// const checkDogs = (dogsJulia, dogsKate) => {
//     const dogsJuliaCorrected = [...dogsJulia];
//     dogsJuliaCorrected.splice(0, 1);
//     dogsJuliaCorrected.splice(-2);
//     const unitedData = [...tempoArr, ...dogsKate];

//     unitedData.forEach((age, i) => {
//         console.log(
//             `Dog number ${i + 1} is an ${
//                 age >= 3 ? 'adult' : 'puppy'
//             } and is ${age} years old `
//         );
//     });

// };
// checkDogs(juliaData, kateDate);

// ARRAY METHOD MAP - gives brand new array
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;

// const movementsUsd = movements.map(mov => mov * euroToUsd);

// console.log(movements);
// console.log(movementsUsd);

// const movementsUsdFor = [];
// for (const mov of movements) {
//     movementsUsdFor.push(mov * euroToUsd);
// }

// console.log(movementsUsdFor);

// const movemenetsDescriptions = movements.map(
//     (mov, i) =>
//         `Movement ${i + 1}: You ${
//             mov > 0 ? 'deposited' : 'withdrew'
//         } ${Math.abs(mov)}`
// );
// console.log(movemenetsDescriptions);

// FILTER METHOD -----------------------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) {
//     if (mov > 0) depositsFor.push(mov);
// }
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
// REDUCE METHOD -----------------------------------

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator => SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//     console.log(`Itteration ${i}: ${acc}`);
//     return acc + cur;
// }, 0);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balanceFor = 0;
// for (const mov of movements) balanceFor += mov;
// console.log(balanceFor);

// // Maximum value
// const maxValue = movements.reduce(
//     (acc, mov) => (acc > mov ? acc : mov),
//     movements[0]
// );

// console.log(maxValue);

// CHALLENGE #2 -----------------------------------------------------------
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = ages =>
//     ages
//         .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//         .filter(age => age >= 18)
//         .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// // return (
// //     // humanAdultAges.reduce((acc, age) => acc + age, 0) /
// //     // humanAdultAges.length

// //     humanAdultAges.reduce((acc, age, i, arr) => acc + age / arr.length, 0)
// // );
// // return humanAdultAges;
// // };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1);
// console.log(avg2);

//--------------------------------------------------------------------------
// MAGIC OF CHAINING METHODS
// const euroToUsd = 1.1;
// const totalDepositsUSD = movements
//     .filter(mov => mov > 0)
//     .map(mov => mov * euroToUsd)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

//--------------------------------------------------------------------------
// CHALLENGE #3
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = ages => {
//     return ages
//         .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//         .filter(humanAge => humanAge >= 18)
//         .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
// };
// const answer1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const answer2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(answer1);
// console.log(answer2);

// ----------------------------------
// FIND METHOD -
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// let correctAcc;
// for (const acc of accounts) {
//     if (acc.owner === 'Jessica Davis') correctAcc = acc;
// }
// console.log(correctAcc);

// SOME AND EVERY METHODS
// console.log(movements);

// //EQUALITY
// console.log(movements.includes(-130));
// // or using condition
// console.log(movements.some(mov => mov === -130));

// SOME:CODITION - returns true if at least one element pass the condition
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// EVERY - returns true if all elements pass the condition
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// FLAT AND FLATMAP
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8, [9, [10]]];
// console.log(arrDeep.flat(2));

// const accountsMovements = accounts.map(acc => acc.movements);
// console.log(accountsMovements);

// const allMovements = accountsMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance2 = accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// // flatMap combines two methods but it can ONLY go ONLE level DEEP!!!
// const overalBalance3 = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance3);

// SORTING
// Strings
// const owners = ['Eimantas', 'Dovile', 'Adam', 'Mick'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers - method does sorting based on strings, that's why it doesn't properly with numbers
// // It converts all numbers to strings and then does the sorting
// console.log(movements);
// console.log(movements.sort());
// // BUT WE CAN FIX THIS BY PASSING A COMPARE CALLBACK FN INTO SORT METHOD

// // if we return something less than 0 so -> return < 0, SO->  A, B(keep order)
// // if we return something more than 0 so -> return > 0  SO->  B, A(Switch order)
// // ASCENDING
// // movements.sort((a, b) => {
// //     if (a > b) return 1;
// //     if (a < b) return -1;
// // });
// //LITERALLY THE SAME BUT SHORTER!!!!!!!!!!!!!
// // Because if a > b and if we do a - b return is always positive we can simplify to
// movements.sort((a, b) => a - b);
// console.log(movements);

// // DESCENDING
// // movements.sort((a, b) => {
// //     if (a > b) return -1;
// //     if (a < b) return 1;
// // });
// //LITERALLY THE SAME BUT SHORTER!!!!!!!!!!!!!
// movements.sort((a, b) => b - a);
// console.log(movements);

// 164. MORE WAYS OF CREATING AND FILLING ARRAYS

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Generating arrays programmaticaly
// // Using array constructor method
// // By passing only one argument to this method we create empty slots - empty x 7
// const x = new Array(7);
// console.log(x);
// // we cannot use this array with map to fill it in
// console.log(x.map(() => 5));
// // Here comes the fill method- mutates the original array
// x.fill(1);
// console.log(x);
// // Works similar to slice.
// // First arg what to fill, 2nd ar 3rd where to fill
// x.fill(3, 2, 5);
// console.log(x);

// arr.fill(7, 2, 4);
// console.log(arr);

// // Array.from - array constructor method. On this Array function we call the from method
// // here we are not using .from as method on array, instead we are using it on array constructor
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const random = Array.from({ length: 100 }, () =>
//     Math.floor(Math.random() * 6 + 1)
// );
// console.log(random);

// labelBalance.addEventListener('click', function () {
//     // using Array.from we can use a callback function to map over the items
//     const movementsUI = Array.from(
//         document.querySelectorAll('.movements__value'),
//         el => el.textContent.replace('€', '')
//     );
//     console.log(movementsUI);

//     // as well we can spread the array into new array, but we cannot map it or can we...
//     const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//     console.log(movementsUI2);

//     const movementsUI3 = [
//         ...document.querySelectorAll('.movements__value'),
//     ].map(el => el.textContent.replace('€', ''));
//     // well yes we can...
//     console.log(movementsUI3);
//     console.log(document.querySelectorAll('.movements__value'));
//     console.log(Array.from(document.querySelectorAll('.movements__value')));
// });

// // ARRAY METHOD PRACTISE Lesson 166

// // 1.
// const bankDepositSum = accounts
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov > 0)
//     .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2.
// // const numDepositsMin1000 = accounts
// //     .flatMap(acc => acc.movements)
// //     .filter(mov => mov >= 1000).length;

// // OR (same thing using reduce method)
// const numDepositsMin1000 = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDepositsMin1000);

// //prefixes
// let a = 10;
// console.log(a++); // the ++operator indeed increases the value, but ir returns old value
// console.log(a);
// console.log(++a); // we can prefix it to get the right value straight away

// // 3.
// // reduce method boils down array to one value
// //but that value can be even a new array or an object
// const { deposits, withdrawals } = accounts
//     .flatMap(acc => acc.movements)
//     .reduce(
//         (sums, cur) => {
//             // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//             // !!!OR!!!
//             sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//             return sums;
//         },
//         { deposits: 0, withdrawals: 0 }
//     );

// console.log(deposits, withdrawals);

// // 4.
// //this is a nice title => This Is a Nice Title
// const convertTitleCase = function (title) {
//     const capitalize = str => str[0].toUpperCase() + str.slice(1);
//     const exceptions = [
//         'a',
//         'an',
//         'and',
//         'the',
//         'but',
//         'or',
//         'on',
//         'in',
//         'with',
//     ];

//     const titleCase = title
//         .toLowerCase()
//         .split(' ')
//         .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//         .join(' ');
//     return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
// console.log(convertTitleCase('this is a Long title but not too long'));

// ---------------------------------------------------------------------------------------
// CHALLENGE #4
/*Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
*/
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];
/*
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
 1.*/

dogs.forEach(
    dog =>
        (dog.recommendedFood =
            // Math.round(((dog.weight ** 0.75 * 28) / 1000) * 100) / 100)
            Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);
/*
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓 */
const checkIfEatingHealthy = dog =>
    dog.curFood / 1000 <= dog.recommendedFood * 1.1 &&
    dog.curFood / 1000 >= dog.recommendedFood * 0.9;
// dogs.forEach(
//     dog =>
//         dog.owners.includes('Sarah') &&
//         console.log(
//             `Sarah dog is ${checkIfEatingHealthy(dog) ? '' : 'not'} eating fine`
//         )
// );
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
    `Sarah's dog is eating too ${
        dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
    }`
);
/*
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').*/
// const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
//     (owners, dog) => {
//         dog.curFood / 1000 > dog.recommendedFood
//             ? owners.ownersEatTooMuch.push(...dog.owners)
//             : owners.ownersEatTooLittle.push(...dog.owners);
//         return owners;
//     },
//     { ownersEatTooMuch: [], ownersEatTooLittle: [] }
// );
// console.log({ ownersEatTooMuch, ownersEatTooLittle });
// ----------------
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
/*
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"*/
// const joinOwnersString = ownersArr => ownersArr.join(' and ');
// console.log(`${joinOwnersString(ownersEatTooLittle)} dogs eat too little`);
// -------
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

/*
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)*/
dogs.forEach(dog => console.log(dog.recommendedFood === dog.curFood));
console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));
/*
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)*/
const checkEatingOk = dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(dog => checkEatingOk));

/*
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)*/

console.log(dogs.filter(checkEatingOk));
/*
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)*/
const dogsCopy = dogs
    .slice()
    .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
/*
Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion. */
