const ancients = document.querySelectorAll('.ancient');
const difficulty = document.querySelector('.difficulty');
const mix = document.querySelector('.mix-cards');
const tracker = document.querySelector('.tracker');
const deck = document.querySelector('.deck');
const shirt = document.querySelector('.shirt');
const shownCard = document.querySelector('.shown-card');

ancients.forEach(el => el.addEventListener('click', function() {
    ancients.forEach(el => el.classList.remove('card-active'));
    el.classList.add('card-active');
    difficulty.classList.add('visible');
}))

const levels = document.querySelectorAll('.level');

levels.forEach(el => el.addEventListener('click', function() {
    mix.classList.add('visible');
    levels.forEach(el => el.classList.remove('visited'));
    el.classList.add('visited');
}));

mix.addEventListener('click', function() {
    tracker.classList.add('visible');
    deck.classList.add('visible');
    mix.classList.add('visited');
})

shirt.addEventListener('click', function() {

})