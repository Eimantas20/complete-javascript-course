'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

const section1 = document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
//-----------------------------------------------------------------------------------
// Page Navigation
// This is wrong approach because we are putting event handler on each of the elements
// It's ok for small amount of elements but what if we had hundreds...
// document.querySelectorAll('.nav__link').forEach(el =>
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     })
// );
// So, to avoid this, we use EVENT DELEGATION
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

// Tabbed component

// EVENT DELEGATION!
tabContainer.addEventListener('click', e => {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    // If something from container is clicked but it is not a button inside the container - it will return
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    tabsContent.forEach(tab =>
        tab.classList.remove('operations__content--active')
    );

    // Active tab
    clicked.classList.add('operations__tab--active');

    // Active content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
            logo.style.opacity = this;
        });
    }
};

// Passing "argument" into handler
// nav.addEventListener('mouseover', function(e){
// handleHover(e, 0.5)
// });
// nav.addEventListener('mouseover', e => handleHover(e, 0.5));
nav.addEventListener('mouseover', handleHover.bind(0.5));

// nav.addEventListener('mouseout', e => handleHover(e, 1));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', () => {
//     console.log(window.scrollY);
//     if (window.scrollY > initialCoords.top) {
//         nav.classList.add('sticky');
//     } else {
//         nav.classList.remove('sticky');
//     }
// });
// Sticky navigation: Intersection Observer API
// const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// };
// const observerOptions = {
//     root: null,
//     threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const revealSections = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSections, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
});

// Lazy loading
const imgTargets = document.querySelectorAll('img[data-src]');
const loadingImg = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;
    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadingImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const maxSlide = slides.length;
    const btnRight = document.querySelector('.slider__btn--right');
    const btnLeft = document.querySelector('.slider__btn--left');
    const dotContainer = document.querySelector('.dots');

    const createDots = () => {
        slides.forEach((_, i) => {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    };

    const activateDot = slide => {
        document
            .querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));
        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    };

    const goToSlide = slide => {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    const nextSlide = () => {
        if (currentSlide === maxSlide - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }

        goToSlide(currentSlide);
        activateDot(currentSlide);
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            currentSlide = maxSlide - 1;
        } else {
            currentSlide--;
        }

        goToSlide(currentSlide);
        activateDot(currentSlide);
    };

    const init = () => {
        createDots();
        activateDot(0);
        goToSlide(0);
    };
    init();
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', e => {
        e.key === 'ArrowLeft' && prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', e => {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider();
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(allSections);

console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
    'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        message.remove();
    });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '100vw';

console.log(message.style.height); // works only for inline style
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); // works will all styles, even it it's not declared in css
console.log(getComputedStyle(message).height);
console.log(
    Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'
);
message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
// Non-standard attribute, hence DOESN'T WORK
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const openBtn = document.querySelector('.btn--show-modal');
console.log(openBtn.href);
console.log(openBtn.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'z');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// DON'T USE
// this will override all the existing classes and it only allows to put one class!
// logo.className = 'jonas'

const btnScrollTo = document.querySelector('.btn--scroll-to');
const element = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();

    console.log(e.target.getBoundingClientRect());

    console.log(
        `curernt scroll(X/Y), ${window.pageXOffset}, ${window.pageYOffset}`
    );

    console.log(
        'height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // Scrolling
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });

    section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//     alert('hover alert');

//     // We can even take it out from this function and even put inside a setTimeout fn
//     // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// Old way of adding event listeners.
// It has two main dissatvangaves:
// a) we can't add two listeners on same element
// b) we can't delete it??
// h1.onmouseenter = function (e) {
//     alert('second alert on hover alert');
// };

// setTimeout(() => {
//     h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// Event Propagation(bubbling and capturing)

// const randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//     `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK', e.target, e.currentTarget);
//     console.log(e.currentTarget === this);

//     // Stop propagation
//     // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Container', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Nav', e.target, e.currentTarget);
// });

// // ---------------------------------------------------------------------------------------
// // DOM TRAVERSING
// const h1 = document.querySelector('h1');
// // Going downwards(child elements)
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'black';

// // Going upwards parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going Sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// // This is how we could add style to all the element except from the one which we are searching other elements
// [...h1.parentElement.children].forEach(el => {
//     if (el !== h1) {
//         el.style.transform = 'scale(0.5)';
//     }
// });

// document
//     .querySelector('.btn--text.btn--scroll-to')
//     .addEventListener('mouseenter', function (e) {
//         e.target.style.transform = 'scale(0.5)';
//     });

// document
//     .querySelector('.btn--text.btn--scroll-to')
//     .addEventListener('mouseleave', function (e) {
//         e.target.style.transform = 'scale(1)';
//     });

// // ---------------------------------------------------------------------------------------
// // LIFECYCLE DOM EVENTS (moment user first access and until he leaves it)
// 1. DOM content loaded
// first event fired by document when the html is completelly parse (downloaded full html and can be converted to DOM tree)
// also all scripts must be downloaded and executed BEFORE the DOM content loaded event can happen
// (just html and js has to be downloaded, no other external api, pics or etc.)
// We can listen to this event

// document.addEventListener('DOMContentLoaded', function (e) {
//     console.log('HTML parsed and DOM tree built!', e);
// });

// // 2. Load event
// // Fired by the window as soon as not only the html is parsed but also all the images, external resources like css file are also loaded
// // So basically when whole page gets loaded this event is fired

// window.addEventListener('load', function (e) {
//     console.log('Page fully loaded', e);
// });

// // 3. Before onload
// // Event is created immediatelly before the user is about to leave the page
// // Like after clicking the close button (we can use to ask 100% sure if user wants to leave)
// window.addEventListener('beforeunload', e => {
//     e.preventDefault();
//     console.log(e);
//     // In order to display a leaving confirmation we need to add a return value
//     // It used to be possible to alter the message but people started using it bad way(abuse it)
//     // No matter what we write - will get same defaulted message
//     e.returnValue = '';
// });
