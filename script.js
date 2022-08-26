import ancientsData from './ancients.js';
import blueCards from './blueCards.js';
import brownCards from './brownCards.js';
import greenCards from './greenCards.js';

let ancient = '';
let level = '';


const shirt = document.querySelector('.shirt');
const shownCard = document.querySelector('.shown-card');

function setAncients() {
    const ancients = document.querySelectorAll('.ancient'); 

    ancients.forEach(el => el.addEventListener('click', getActiveAncient));
}

setAncients();

function getActiveAncient(event) {
    const ancients = document.querySelectorAll('.ancient');
    const difficulty = document.querySelector('.difficulty');

    ancient = event.target.alt;

    for (let i = 0; i < ancients.length; i++) {
        ancients[i].classList.remove('card-active');
        if (ancients[i].alt === event.target.alt) {
            ancients[i].classList.add('card-active');
            difficulty.classList.add('visible');
        }
    }
    getAncientSet();
}

function getAncientSet() {
    const pointers = document.querySelectorAll('.pointer');
    const ancientSet = [];

    for (let i = 0; i < ancientsData.length; i++) {
        if (ancient === ancientsData[i].id) {
            ancientSet.push(ancientsData[i].firstStage.greenCards);
            ancientSet.push(ancientsData[i].firstStage.brownCards);
            ancientSet.push(ancientsData[i].firstStage.blueCards);
            ancientSet.push(ancientsData[i].secondStage.greenCards);
            ancientSet.push(ancientsData[i].secondStage.brownCards);
            ancientSet.push(ancientsData[i].secondStage.blueCards);
            ancientSet.push(ancientsData[i].thirdStage.greenCards);
            ancientSet.push(ancientsData[i].thirdStage.brownCards);
            ancientSet.push(ancientsData[i].thirdStage.blueCards);
            
            for (let j = 0; j < pointers.length; j++) {
                pointers[j].textContent = ancientSet[j];
            }
        }
    }
    return ancientSet;
}

function setLevel() {
    const levels = document.querySelectorAll('.level'); 
    
    levels.forEach(el => el.addEventListener('click', getActiveLevel));
}

setLevel();

function getActiveLevel(event) {
    const levels = document.querySelectorAll('.level');
    const mix = document.querySelector('.mix-cards');

    level = event.target.name;

    for (let i = 0; i < levels.length; i++) {
        levels[i].classList.remove('visited');
        if (levels[i].name === event.target.name) {
            levels[i].classList.add('visited');
            mix.classList.add('visible');
        }
    }
}

function mixDeck() {
    const tracker = document.querySelector('.tracker');
    const deck = document.querySelector('.deck');
    const mix = document.querySelector('.mix-cards');

    tracker.classList.add('visible');
    deck.classList.add('visible');
    mix.classList.remove('visible');
    getMixedDeck();
}

function setVisitedMixButton() {
    const mix = document.querySelector('.mix-cards');
    mix.addEventListener('click', mixDeck);
}

setVisitedMixButton();

function getMixedDeck() {
    console.log(blueCards);
    console.log(brownCards);
    console.log(greenCards);

    let resultSet = [];

    resultSet = getGreenSet().concat(getBrownSet(), getBlueSet());
    console.log(resultSet);
    shuffleCards(resultSet);
    console.log(shuffleCards(resultSet));
}

function getGreenSet() {
    const ancientSet = getAncientSet();
    console.log(ancientSet);
    let greenSet = [];

    greenSet.push(ancientSet[0]);
    greenSet.push(ancientSet[3]);
    greenSet.push(ancientSet[6]);

    console.log(greenSet);
    return greenSet;
}

function getBrownSet() {
    const ancientSet = getAncientSet();
    console.log(ancientSet);
    let brownSet = [];

    brownSet.push(ancientSet[1]);
    brownSet.push(ancientSet[4]);
    brownSet.push(ancientSet[7]);

    console.log(brownSet);
    return brownSet;
}

function getBlueSet() {
    const ancientSet = getAncientSet();
    console.log(ancientSet);
    let blueSet = [];

    blueSet.push(ancientSet[2]);
    blueSet.push(ancientSet[5]);
    blueSet.push(ancientSet[8]);

    console.log(blueSet);
    return blueSet;
}

function countCards(array) {
    array.reduce((acc, num) => acc + num, 0);
}

function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


getMixedDeck();
