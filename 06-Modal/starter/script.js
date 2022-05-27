'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const handleOpenEvent = () => {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
};

const handleCloseEvent = () => {
    console.log('closing modal');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', handleOpenEvent);
}

btnCloseModal.addEventListener('click', handleCloseEvent);
overlay.addEventListener('click', handleCloseEvent);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        handleCloseEvent();
});
