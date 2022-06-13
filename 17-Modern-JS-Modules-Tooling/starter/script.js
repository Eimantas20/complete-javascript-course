// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
console.log(' Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('ice cream', 10);
// console.log(ShoppingCart.totalPrice);

// Import ar not copies of export, they are like live connection, they point to same object in memory
import addToBasket, { cart } from './shoppingCart.js';

addToBasket('milk', 1);
addToBasket('rice', 1);
console.log(cart);

console.log('start fetching');

// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// const data = await res.json();
// console.log(data);
// console.log('wait for users');

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('pizza', 2);
ShoppingCart2.addToCart('beer', 4);
console.log(ShoppingCart2);

// When not using any bundlers like webpack or parcel, we need to specify whole path to the moduke
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// We use this syntax when using bundlers, it findes module automatically
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        { product: 'bread', quantity: 3 },
        { product: 'pizza', quantity: 4 },
    ],
    user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
    module.hot.accept();
}

class Person {
    #greeting = 'Hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}

const david = new Person('David');
