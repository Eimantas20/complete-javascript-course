'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://restcountries.com/v2/

// old school
// Getting two countries data at the same time
// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         const html = `
//             <article class="country">
//                 <img class="country__img" src="${data.flags.svg}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${data.name.official}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>POP people ${(
//                         data.population / 1000000
//                     ).toFixed(1)}</p>
//                     <p class="country__row"><span>🗣️</span> ${
//                         data.languages.lit || data.languages.en
//                     }</p>
//                     <p class="country__row"><span>💰</span>CUR: ${
//                         data.currencies.EUR?.name || data.currencies.USD?.name
//                     }${
//             data.currencies.EUR?.symbol || data.currencies.USD?.symbol
//         }</p>
//                 </div>
//             </article>
//         `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('lithuania');
// getCountryData('usa');

// Getting two countries: second after first one is received.

const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.official}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>POP people ${(
                    data.population / 1000000
                ).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span> ${
                    data.languages.lit || data.languages.en
                }</p>
                <p class="country__row"><span>💰</span>CUR: ${
                    data.currencies.EUR?.name || data.currencies.USD?.name
                }${
        data.currencies.EUR?.symbol || data.currencies.USD?.symbol
    }</p>
            </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
};
// const getCountryAndNeighbour = function (country) {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         //Render country 1
//         renderCountry(data);

//         // Get neighbour country (2)
//         const request2 = new XMLHttpRequest();
//         const neighbour = data.borders?.[1];
//         if (!neighbour) return;

//         // AJAX call neighbour
//         request2.open(
//             'GET',
//             `https://restcountries.com/v3.1/alpha/${neighbour}`
//         );
//         request2.send();

//         request2.addEventListener('load', function () {
//             const [data2] = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, 'neighbour');
//         });
//     });
// };

// getCountryAndNeighbour('usa');

// // Callback hell
// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 second passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//             setTimeout(() => {
//                 console.log('4 second passed');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// FROM ES6 moder way to make http request: -------------------------------------------------------
// old way
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

//new way:
// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => {
//             // console.log(response);

//             if (!response.ok) {
//                 throw new Error(`Country not found (${response.status})`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             // const neighbour = data[0].borders?.[0];
//             const neighbour = 'asddas';
//             if (!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//             // return 23;
//         })
//         // .then(data => alert(data));
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Neighbour country url was not found');
//             }

//             return response.json();
//         })
//         .then(data => renderCountry(data[0], 'neighbour'))
//         .catch(error => {
//             console.error(`${error}; We got an error`);
//             renderError(`Something went wrong ${error.message}`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };
// // getCountryData('lithuania');
// btn.addEventListener('click', function () {
//     getCountryData('usa');
// });

// getCountryData('germany');

// There was a lot of .then chaining so we can extract some of it to make it nicer
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`${errorMsg} (${response.status})`);
        }
        return response.json();
    });
};

const getCountryData = function (country) {
    // Country 1
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`,
        'Country not found'
    )
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            // const neighbour = 'asdasd';
            // this doesn't work if there are no neighbours, we need to throw a new error
            // if (!neighbour) return;
            if (!neighbour) throw new Error('No neighbour found');

            return getJSON(
                `https://restcountries.com/v3.1/alpha/${neighbour}`,
                'Neighbour country not found'
            );
        })
        .then(data => renderCountry(data[0], 'neighbour'))
        .catch(error => {
            console.error(`${error}; We got an error`);
            renderError(`Something went wrong ${error.message}`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};
// getCountryData('lithuania');
btn.addEventListener('click', function () {
    getCountryData('australia');
});

// Event loop in practice(call stack, WEB APIs, microtasks queue, callback queue)

console.log('Test start');
// setTimeout callback will be put to callback queue
setTimeout(() => {
    console.log('0 sec timer');
}, 0);
// Promise callback will be put into microtask queue
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');

/*
NOTE** timeout and promise is finished imediatelly
So order of these will be start and end of test console, because they don't have callbacks and 
they go straight away into call stack
then Promise.resolve console because this callback will be put into microtasks queue 
and this queue has priority over callback queue(so it kinda holds it back)
and last will be time the timeout console, because this callback will be placed in callback queue
and it online goes into call stack once it is EMPTY
*/

//This proves that only when microtask queue is empy callback queue willbe executed in call stack
// So this means that cannot do high precision things using JS timers, whenever we are working
// with promises and timers at the same time
Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log(res);
});
