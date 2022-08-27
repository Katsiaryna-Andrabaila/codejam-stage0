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


//************************************************************* NORMAL DIFFICULTY DECK ********************************************************/

function getMixedDeck() {
    let finishSet = [];

    finishSet = getFirstSet().concat(getSecondSet(), getThirdSet());
    console.log(finishSet);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFirstSet() {
    let resultFirstSet = [];

    resultFirstSet = getFirstGreenSet().concat(getFirstBrownSet(), getFirstBlueSet());
    console.log(resultFirstSet);
}

function getFirstGreenSet() {
    const pointers = document.querySelectorAll('.pointer');
    let firstGreenSet = [];
    let num = Number(pointers[0].innerHTML);
    let count = 0;
    let greenSet = getNormalGreenSet();

    if (num > 0) {
        while (count < num) {
            firstGreenSet.push(greenSet[getRandomIntInclusive(0, greenSet.length - 1)]);
            count++;
        }
    } else {
        firstGreenSet = [];
    }
    return firstGreenSet;
}

function getFirstBrownSet() {
    const pointers = document.querySelectorAll('.pointer');
    let firstBrownSet = [];
    let num = Number(pointers[1].innerHTML);
    let count = 0;
    let brownSet = getNormalBrownSet();

    if (num > 0) {
        while (count < num) {
            firstBrownSet.push(brownSet[getRandomIntInclusive(0, brownSet.length - 1)]);
            count++;
        }
    } else {
        firstBrownSet = [];
    }
    return firstBrownSet;
}

function getFirstBlueSet() {
    const pointers = document.querySelectorAll('.pointer');
    let firstBlueSet = [];
    let num = Number(pointers[2].innerHTML);
    let count = 0;
    let blueSet = getNormalBlueSet();

    if (num > 0) {
        while (count < num) {
            firstBlueSet.push(blueSet[getRandomIntInclusive(0, blueSet.length - 1)]);
            count++;
        }
    } else {
        firstBlueSet = [];
    }
    return firstBlueSet;
}

function getSecondSet() {
    let resultSecondSet = [];

    resultSecondSet = getSecondGreenSet().concat(getSecondBrownSet(), getSecondBlueSet());
    console.log(resultSecondSet);
}

function getSecondGreenSet() {
    const pointers = document.querySelectorAll('.pointer');
    let secondGreenSet = [];
    let num = Number(pointers[3].innerHTML);
    let count = 0;
    let greenSet = getNormalGreenSet();

    if (num > 0) {
        while (count < num) {
            secondGreenSet.push(greenSet[getRandomIntInclusive(0, greenSet.length - 1)]);
            count++;
        }
    } else {
        secondGreenSet = [];
    }
    return secondGreenSet;
}

function getThirdSet() {
    let resultThirdSet = [];

    resultThirdSet = getThirdGreenSet().concat(getThirdBrownSet(), getThirdBlueSet());
    console.log(resultThirdSet);
}

function getNormalGreenSet() {
    const pointers = document.querySelectorAll('.pointer');
    
    let greenSet = [];
    let sum = Number(pointers[0].innerHTML) + Number(pointers[3].innerHTML) + Number(pointers[6].innerHTML);
    console.log(sum);

    let count = 0;
    while (count < sum) {
        let random = getRandomIntInclusive(0, greenCards.length - 1);
        greenSet.push(greenCards[random]);
        greenCards.splice(random, 1);
        count++;
    }

    console.log(greenSet);
    return greenSet;
}

function getNormalBrownSet() {
    const pointers = document.querySelectorAll('.pointer');
    
    let brownSet = [];
    let sum = Number(pointers[1].innerHTML) + Number(pointers[4].innerHTML) + Number(pointers[7].innerHTML);
    console.log(sum);

    let count = 0;
    while (count < sum) {
        let random = getRandomIntInclusive(0, brownCards.length - 1);
        brownSet.push(brownCards[random]);
        brownCards.splice(random, 1);
        count++;
    }

    console.log(brownSet);
    return brownSet;
}

function getNormalBlueSet() {
    const pointers = document.querySelectorAll('.pointer');
    
    let blueSet = [];
    let sum = Number(pointers[2].innerHTML) + Number(pointers[5].innerHTML) + Number(pointers[8].innerHTML);
    console.log(sum);

    let count = 0;
    while (count < sum) {
        let random = getRandomIntInclusive(0, blueCards.length - 1);
        blueSet.push(blueCards[random]);
        blueCards.splice(random, 1);
        count++;
    }

    console.log(blueSet);
    return blueSet;
}

