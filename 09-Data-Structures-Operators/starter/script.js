'use strict';

// //Data needed for a later exercise
const flights2 =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    nested: {
        deeperNesting: 'JackPot',
    },

    order(startedIndex, mainIndex) {
        return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
    },
    //Int his orderDelivery, we wait and object to be passed as an argument
    //and then we destructure it straight away, with the exact property values
    //as well, may even define a default values if property is not found in provided obj
    orderDelivery({ starterIndex = 0, mainIndex, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },

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
};
// ----------------------------------------------------------
// // WORKING WITH STRINGS PT2===========================

// //Split and join
// console.log('a+very+string'.split('+'));
// console.log('Eimantas Kanasevicius'.split(' '));
// const [firstName, lastName] = 'Eimantas Kanasevicius'.split(' ');
// console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = name => {
//     const names = name.split(' ');
//     const nameUpper = [];

//     for (const n of names) {
//         // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//         nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(nameUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('eimantas kan');

// // Padding a string - adding a number of characters to string until a string has a desired length
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('eimantas'.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = function (number) {
//     // converts numbers to string
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(4512512484569452));
// console.log(maskCreditCard('451251248456945246485'));

// //Repeat - repeat str multiple times
// const message2 = 'Bad weather... ALl departures delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//     console.log(`There are ${n} planes in lines ${'s'.repeat(n)}`);
// };
// planesInLine(3);
// planesInLine(4);
// planesInLine(2);
// ----------------------------------------------------------
// // WORKING WITH STRINGS PT1===========================
// const airline = 'TAP Air Portugal';
// // const plane = 'A320';
// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log(plane[2]);
// // console.log('B730'[1]);
// // console.log(airline.length);
// // console.log('B730'.length);

// // console.log(airline.indexOf('r'));
// // console.log(airline.lastIndexOf('r'));
// // console.log(airline.lastIndexOf('Portugal'));

// // console.log(airline.slice(4));
// // console.log(airline.slice(4, 7));

// // console.log(airline.slice(0, airline.indexOf(' ')));
// // console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// // console.log(airline.slice(-2)); //with negative values start from other end
// // console.log(airline.slice(1, -1));

// // const checkMiddleSeat = function (seat) {
// //     // B and E are middle seats
// //     const s = seat.slice(-1);
// //     if (s === 'B' || s === 'E') console.log('You got the crappy seat');
// //     else console.log('You got lucky');
// // };

// // checkMiddleSeat('11B');
// // checkMiddleSeat('23C');
// // checkMiddleSeat('3E');

// // console.log(new String('Burger'));
// // console.log(typeof new String('Burger'));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization in name
// const passenger = 'eImaNtas';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const fixCapitalization = str => {
//     const lowerCase = str.toLowerCase();
//     return lowerCase[0].toUpperCase() + lowerCase.slice(1);
// };

// console.log(fixCapitalization('tOmAs'));

// //Compare emails
// const email = 'hello@gmail.com';
// const loginEmail = '   Hello@GmaiL.cOm \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(trimmedEmail === normalizedEmail);

// //replacing
// const priceGB = '288,97$';
// const priceUS = priceGB.replace('$', '%').replace(',', '.');
// console.log(priceUS);

// const announcement =
//     'All passengers come to boarding door 23. Boarding Door 23!';
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/gi, 'gate'));

// //Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boing'));
// console.log(plane.startsWith('Air'));
// console.log(plane.startsWith('AiR'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo'))
//     console.log('Part of the NEW Airbus family');

// //Practice exercise
// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun'))
//         console.log('You are NOT allowed on Board');
//     else console.log('Welcome aboard!');
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Sock and camera');
// checkBaggage('Got some snacks and a gun for protection');

// ----------------------------------------------------------
// SETS===========================================
// MAPS
// const rest = new Map();
// console.log(rest);
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'France, italy');
// rest.set(2, 'lisbon, Portugal');
// rest.set({ he: 15 }, 'miau');
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open')
//     .set(false, 'We are closed');
// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(false));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// console.log(rest.clear());
// //unable to get the item like this, because the arrays [1,2] ar different vars(has different address in execution context)
// rest.set([1, 2], 'Test');
// console.log(rest);
// rest.get([1, 2]);
// //now we would need to do it like this:
// const sameExAddressArr = [1, 2];
// rest.set(sameExAddressArr, ['New value for this pair']);
// console.log(rest);
// console.log(rest.get(sameExAddressArr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// //creating new map without set
// const question = new Map([
//     ['question', 'What is the best programming language?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'Corrent answer!!!'],
//     [false, 'Try again'],
// ]);

// console.log(question);

// //Convert object to map
// const openingHours = restaurant.openingHours;
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// // console.log(answer);

// // console.log(question.get(answer === question.get('correct')));

// //convert map to arr
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// ----------------------------------------------------------
// SETS===========================================
// const ordersSet = new Set(['pasta', 'pizza', 'potatos', 'pizza', 'pasta']);
// console.log(ordersSet);
// console.log(new Set('Eimantas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('pasta'));
// console.log(ordersSet.has('zepelin'));
// console.log(ordersSet.add('burger'));
// console.log(ordersSet.add('burger'));
// ordersSet.delete('pasta');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log([...staffUnique]);
// console.log(new Set(staff).size);

// console.log(new Set('eimantaskanasevicius'));

// ----------------------------------------------------------
//LOOPING OBJECTS: KEYS, VALUES, ENTRIES
//property names
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length}: days: `;
// for (const day of properties) {
//     openStr += `${day}`;
//     console.log(openStr);
// }

// //property values
// const values = Object.values(restaurant.openingHours);
// console.log(values);
// //property entries are names + values together
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// ----------------------------------------------------------
// // OPTIONAL CHAINING
// //old way
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//     console.log(restaurant.openingHours.mon.open);
// }
// // WITH optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat'];
// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open;
//     open && console.log(`On ${day}, we open at ${open}`);
// }
// //using on methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderZepellin?.(0, 1) ?? 'Method does not exist');`
// //using on arrays
// const users = [{ name: 'Eimantas', email: 'myemail@gmail.com' }];

// console.log(users[0]?.name ?? 'Use array empty');
// ----------------------------------------------------------
// // ENHANCED OBJECT LITERALS three ways:
// // 1)
// const hours = {
//     thu: {
//         open: 12,
//         close: 22,
//     },
//     fri: {
//         open: 11,
//         close: 23,
//     },
//     sat: {
//         open: 0,
//         close: 24,
//     },
// };

// const newRestaurant = {
//     name: 'newrest',
//     //instread of: hours: hours, we do this:
//     hours,
// };

// // 2) Writing methods
// restaurant.enhancedObjLit = {
//     newFunction(arg) {
//         console.log(arg);
//     },
// };
// restaurant.enhancedObjLit.newFunction('fuuuck');

// // 3) Compute object property names, instead of writing them manually
// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat'];
// const openingHorus = {
//     [weekdays[1]]: {
//         open: 8,
//     },
//     [weekdays[3]]: {
//         open: 10,
//     },
//     [weekdays[5]]: {
//         open: 12,
//     },
// };
// openingHorus[`this is so fucked up ${weekdays[0]}`] = 'whaaa';
// //we are computing the PROPERTY VALUES
// console.log(openingHorus);
// ----------------------------------------------------------
// // LOOPING ARRAYS FOR-OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//     console.log(item);
// }
// //so we can use the provided entries smarter - using destructuring:
// for (const [i, item] of menu.entries()) {
//     console.log(`${i + 1}: ${item}`);
// }
// console.log(arr.entries());

//LOGICAL ASSIGNMENT OPERATORS
// const rest1 = {
//     name: 'Capri',
//     numGuests: 20,
// };
// const rest2 = {
//     name: 'Capri',
//     owner: 'Jovani',
// };
// const rest3 = {
//     name: 'Nullish coalescing op',
//     numGuests: 0,
// };
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// //We can do same using OR || assignment operator
// //assigns a value to operator if it is falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// //if we used this as on the previous example with || operator
// //we would get rest3.numGuests = 10, as 0 is falsy, but not nullish
// rest3.numGuests ??= 10;

// //Logical AND && assignment operator
// // If we want to replace the value, because && returns 1st truthy value!!!
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// //doing same using AND assignment operator
// //it will assign a var to a value if it currently truthy
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
// console.log(rest3);

// ----------------------------------------------------------
// NULISH COALESCING OPERATOR ??
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// //Nulish: null and undefined (NOT 0 or '')
// //0 is not nulish value,therefore the evaluation here is short-circuited and 0 is returned
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// ----------------------------------------------------------
// //LOGICAL OPERATORS
// //Three more properties to use in logical operators:
// // 1) short-circuiting -Use ANY data type, return ANY data type
// console.log(3 || 'Text');
// console.log('', 'text');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || null || 'Hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// // && AND operator
// console.log('-------AND-----------');
// console.log(0 && 'Text');
// console.log(7 && '');
// console.log('Hey' && 23 && null && 'Text');

// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms', 'spinach');
// }
// //Same can be done in simpler way
// restaurant.orderPizza && restaurant.orderPizza('potates', 'salad');

// //REST PARAMETER------------------------------------
// // exact syntax as spread operator but it is
// //used to collect multiple elements and condense(pack) them into arr
// //used on the LEFT side of the assignment operator
// // 1) spread op. inside objects and arrays
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(other);

// const [pizza, , risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Objest rest parameter
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// //2) spread op. inside functions
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//     console.log(sum);
// };

// add(2, 3);
// add(5, 5, 7, 8, 5);
// add(5, 2, 4, 8, 5, 6, 52);

// const x = [15, 5, 8];
// add(...x);

// restaurant.orderPizza('sausage', 'onions', 'mushrooms', 'olives');
// restaurant.orderPizza('mushrooms');

//SPREAD OPERATOR ----------------------------
// used to built new arrays or to pass multiple values into a function
//used on the RIGHT side of the assignment operator
// const arr = [7, 5, 5];
// //doing it manually
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// //using spread operator
// const newArrGood = [1, 2, ...arr];
// console.log(newArrGood);

// // Passing multiple elements into function
// console.log(...newArrGood);

// //creating new array - not changing the original
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Shallow copy of arr
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 or more arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //spread op. works on all arrays, strings, maps, sets - NOT OBJECTS
// const str = 'Eimantas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// //Doesn't work as we can only use spread when building arr or when we pass value into fn, not templ lit.
// // console.log(`${...str} asdad`);

// // const ingredients = [
// //     prompt("Let's make paste! Ingredient 1?"),
// //     prompt('Ingredient 2?'),
// //     prompt('Ingredient 3?'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //Spread operators on object:
// const newRestaurant = { foundedIn: 1994, ...restaurant, founder: 'Mulk' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'MyResty';
// restaurant.nested.deeperNesting = 'Vilnius';
// console.log(restaurant);
// console.log(restaurantCopy);

// //OBJECT DESTRUCTURING-------------------------------

// restaurant.orderDelivery({
//     time: '24:14',
//     address: 'Lvovo st',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: 'Lvovo st',
//     mainIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// //Renaming new declared variables destructured from object
// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //DEFAULT VALUE if object doesn't have prop with same name
// //and and example of renaming and giving a default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //MUTATING VARIABLES
// let a = 111;
// let b = 555;
// const obj = { a: 21, b: 52, c: 9 };
// //JS will through an error, as when starting a line
// //with {} JS expects a code block, so we can't reasign the a and b variables
// // {a, b} = obj;
// //so trick is to wrap obj destructuring with vars a and b reasignment with parenthesis ():
// ({ a, b } = obj);
// console.log(a, b);

// //Nested object destructuring
// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);
// //Nested object destructuring with renaming

// const {
//     openingHours: {
//         thu: { open: x, close: z },
//     },
// } = restaurant;
// console.log(x, z);

// //DATA DESTRUCTURING------------------------------
// const arr = [2, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// //destructuring arr - original arr stays same
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching two vars in silly way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// [secondary, main]

// //switching two vars tricky way
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , j, k] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [7, 9];
// console.log(p, q, r);
