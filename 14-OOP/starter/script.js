'use strict';

// // LESSON 208 - Constructor Functions and the new Operator
// // This is our constructor fn
// const Person = function (firstname, birthYear) {
//     // Instance properties - will be available on all the instances
//     this.firstName = firstname;
//     this.birthYear = birthYear;

//     // Methods
//     // NEVER CREATE METHODS INSIDE OF A CONSTRUCTOR FUNCTION
//     // this.calcAge = function() {
//     //     console.log(2022 - this.birthYear)
//     // }
// };

// // Now we call our constructor fn with "new" keyword
// const eimantas = new Person('Eimantas', 1994);
// console.log(eimantas);

// // 1. New empty object {} is created
// // 2. Function is called, "this" keyword is set to newly created object
// // 3. Newly created empty object is linked to prototype
// // 4. Function automatically return our new object and at this point our object no longer needs to be empty

// const dovile = new Person('dovile', 2000);
// const mikis = new Person('Mikis', 1560);
// console.log(dovile, mikis);

// const jay = 'Jay';

// console.log(jay instanceof Person);
// console.log(eimantas instanceof Person);

// // Static method for a function constructor funcion
// Person.hey = function () {
//     console.log('Hey there');
// };

// Person.hey();
// // Won't work due to static instance method!! NOT inherited to proptypes.
// // mikis.hey();

// // -------------------------------------------------------------------------------------------
// // LESSON 209 - Prototypes

// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//     console.log(2022 - this.birthYear);
// };

// eimantas.calcAge();
// dovile.calcAge();

// console.log(eimantas.__proto__);
// console.log(eimantas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(eimantas));
// console.log(Person.prototype.isPrototypeOf(dovile));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(eimantas.species, dovile.species);

// console.log(eimantas.hasOwnProperty('firstName'));
// console.log(eimantas.hasOwnProperty('species'));

// console.log(eimantas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(eimantas.__proto__.__proto__);
// console.log(eimantas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 5, 1, 56, 5];
// // OR
// const arr2 = new Array(3, 4, 5, 1, 56, 5, 3, 5, 252, 1, 56);
// // so [] and new Array is same thing
// console.log(arr, arr2);
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__ === eimantas.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };

// console.log(arr2.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// -------------------------------------------------------------------------------------------
// LESSON 213 - Classes
// Classes are still functions, just another type
// Therefore we have class expressions and class declarations (both are same)

// class expression
// const PersonCl = class {}

// // class declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Using ES6 classes we add methods inside the class right after the constructor, which holds all properties
//     // Methods will be added to .prototype property (of PersonCl class in this case)
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     }

//     get age() {
//         return 2022 - this.birthYear;
//     }

//     // Setting property that already exist - we have to add underscore(convention)
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     // Without this we get into endless loop, we need new getter
//     get fullName() {
//         return this._fullName;
//     }

//     // Static/ Instance method(prototypes does not inherit)
//     static hey() {
//         console.log('Hey from class constructor');
//     }
// }

// const mike = new PersonCl('Mike Will', 1997);
// console.log(mike);
// mike.calcAge();
// console.log(mike.age);
// console.log(mike.__proto__ === PersonCl.prototype);

// // as well we can add methods like this - but preferable to hold everything inside the class
// PersonCl.prototype.great = function () {
//     console.log(`Hello ${this.fullName}`);
// };
// mike.great();

// PersonCl.hey();
// // Won't work as this method is instance method!!!!
// // mike.hey();

// const Wally = new PersonCl('Wally', 1995);

/* 1. Classes are NOT hoisted(even if they are class declarations)
Function declarationsli are hoisted - we can use them before they are declared in the code
Cannot do the same with classes

2. Just like functions - classes are first-class citizens
That means we can pass them into functions and also return them from functions

3. Body of a class is always executed in strict mode - even if not activated
*/

// -------------------------------------------------------------------------------------------
// // LESSON 214 - SETTERS AND GETTERS

// const account = {
//     owner: 'Eimantas',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     },
// };

// console.log(account.latest);
// account.latest = 111111;
// console.log(account);
// console.log(account.latest);

// // -------------------------------------------------------------------------------------------
// // // Object.create
// // It has the idea of prototypal inheritance - however there are no prototype properties, no constructor functions and no new operator
// // WE use Object.create to manually set prototype of an object to any other object that we want

// const PersonProto = {
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 1994;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// // -------------------------------------------------------------------------------------------
// // Lesson 218 INHERTANCE BETWEEN 'CLASSES': CONSTRUCTOR FUNCTIONS

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//     // instead of repeating same props as from Person constructor fn we can call it inside Student
//     // But simple call wouldn't work as this keyword is always set to caller function
//     // Person(firstName, birthYear) - wouldn't work
//     // so we manually set this keyword and call it in one go - using the call method!
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// };

// // Linkink prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2000, 'IT');
// mike.introduce();
// console.log(mike);
// mike.calcAge();
// console.log(mike.hasOwnProperty('firstName'));
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Person);
// console.log(mike instanceof Student);

// console.dir(Student.prototype.constructor);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// console.log(mike instanceof Person);
// console.log(mike instanceof Student);

// // -------------------------------------------------------------------------------------------
// // Lesson 218 INHERTANCE BETWEEN 'CLASSES': ES6 CLasses

// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Using ES6 classes we add methods inside the class right after the constructor, which holds all properties
//     // Methods will be added to .prototype property (of PersonCl class in this case)
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     }

//     get age() {
//         return 2022 - this.birthYear;
//     }

//     // Setting property that already exist - we have to add underscore(convention)
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     // Without this we get into endless loop, we need new getter
//     get fullName() {
//         return this._fullName;
//     }

//     // Static/ Instance method(prototypes does not inherit)
//     static hey() {
//         console.log('Hey from class constructor');
//     }
// }

// class StudentCl extends PersonCl {
//     // If we wouldn't need to add any properties - we wouldn't need a contructor - it would work without it
//     constructor(fullName, birthYear, course) {
//         // Always needs to happen first!
//         super(fullName, birthYear);
//         this.course = course;
//     }

//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }

//     // Overriding method comming from parent class
//     calcAge() {
//         console.log(`I'm ${2022 - this.birthYear}`);
//     }
// }

// // const martha = new StudentCl('Martha Jones', 2012);
// const martha = new StudentCl('Martha Jones', 2012, 'Accounting');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// // -------------------------------------------------------------------------------------------
// // Lesson 218 INHERTANCE BETWEEN 'CLASSES': Object.create

// const PersonProto = {
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };
// StudentProto.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);

// jay.init('Jay', 2010, 'Engineer');
// console.log(jay);
// jay.introduce();
// jay.calcAge();
// // -------------------------------------------------------------------------------------------

// 1) Public fields - property on all instances
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version: static methods are only available on the instances, but only on the class itself)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // Protected property goes with underscore(convention)
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account ${owner}`);
    }

    // 3) Public methods
    // Public Interface of our object - API
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    static helper() {
        console.log('Helper fn');
    }

    // 4) Private methods (to hide implementation details from outside)
    #approveLoan(val) {
        return true;
    }
}

const account1 = new Account('Eimantas', 'EUR', 1111);

// It is a bad practice to modify properties like this(will introduce bugs as app grows...)
// a lot better to create methods to interact with these properties
// Now will create the methods "deposit" and "withdraw" to do this
// account1.movements.push(250);
// account1.movements.push(-75);
// console.log(account1);

account1.deposit(777);
account1.withdraw(111);
console.log(account1);
console.log(account1.pin);
console.log(account1.getMovements());

account1.requestLoan(1000);

// Private fields are not accesible like this
// console.log(account1.#pin);
// console.log(account1.#movements);
// console.log(account1.#approveLoan(5));

Account.helper();

// Chaining
account1
    .deposit(300)
    .deposit(500)
    .withdraw(150)
    .requestLoan(25000)
    .withdraw(20000);
console.log(account1.getMovements());
