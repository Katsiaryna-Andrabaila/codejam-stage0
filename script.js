import ancientsData from './ancients.js';
import blueCards from './blueCards.js';
import brownCards from './brownCards.js';
import greenCards from './greenCards.js';

let ancient = '';
let level = '';
let greenSet = [];
let brownSet = [];
let blueSet = [];
let firstSet = [];
let secondSet = [];
let thirdSet = [];
let finishSet = [];
let stage = 1;

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
    finishSet = [];

    getNormalGreenSet();
    getNormalBrownSet();
    getNormalBlueSet();
    getFirstSet();
    getSecondSet();
    getThirdSet();
    finishSet = firstSet.concat(secondSet, thirdSet);
    console.log(finishSet);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFirstSet() {
    firstSet = [];
    const pointers = document.querySelectorAll('.pointer');

    let greenNum = Number(pointers[0].innerHTML);
    let brownNum = Number(pointers[1].innerHTML);
    let blueNum = Number(pointers[2].innerHTML);

    for (let i = 0; i < greenNum; i++) {
        firstSet.push(greenSet[0]);
        greenSet.splice(0, 1);
    }

    for (let i = 0; i < brownNum; i++) {
        firstSet.push(brownSet[0]);
        brownSet.splice(0, 1);
    }

    for (let i = 0; i < blueNum; i++) {
        firstSet.push(blueSet[0]);
        blueSet.splice(0, 1);
    }

    for (let i = firstSet.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [firstSet[i], firstSet[j]] = [firstSet[j], firstSet[i]];
    }
    
    console.log(firstSet);

}

function getSecondSet() {
    secondSet = [];
    const pointers = document.querySelectorAll('.pointer');

    let greenNum = Number(pointers[3].innerHTML);
    let brownNum = Number(pointers[4].innerHTML);
    let blueNum = Number(pointers[5].innerHTML);

    for (let i = 0; i < greenNum; i++) {
        secondSet.push(greenSet[0]);
        greenSet.splice(0, 1);
    }

    for (let i = 0; i < brownNum; i++) {
        secondSet.push(brownSet[0]);
        brownSet.splice(0, 1);
    }

    for (let i = 0; i < blueNum; i++) {
        secondSet.push(blueSet[0]);
        blueSet.splice(0, 1);
    }

    for (let i = secondSet.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [secondSet[i], secondSet[j]] = [secondSet[j], secondSet[i]];
    }
    
    console.log(secondSet);
}

function getThirdSet() {
    thirdSet = [];
    const pointers = document.querySelectorAll('.pointer');

    let greenNum = Number(pointers[6].innerHTML);
    let brownNum = Number(pointers[7].innerHTML);
    let blueNum = Number(pointers[8].innerHTML);

    for (let i = 0; i < greenNum; i++) {
        thirdSet.push(greenSet[0]);
        greenSet.splice(0, 1);
    }

    for (let i = 0; i < brownNum; i++) {
        thirdSet.push(brownSet[0]);
        brownSet.splice(0, 1);
    }

    for (let i = 0; i < blueNum; i++) {
        thirdSet.push(blueSet[0]);
        blueSet.splice(0, 1);
    }

    for (let i = thirdSet.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [thirdSet[i], thirdSet[j]] = [thirdSet[j], thirdSet[i]];
    }
    
    console.log(thirdSet);
}

function getNormalGreenSet() {
    const pointers = document.querySelectorAll('.pointer');
    

    let sum = Number(pointers[0].innerHTML) + Number(pointers[3].innerHTML) + Number(pointers[6].innerHTML);

    let count = 0;
    while (count < sum) {
        let random = getRandomIntInclusive(0, greenCards.length - 1);
        greenSet.push(greenCards[random]);
        greenCards.splice(random, 1);
        count++;
    }

    console.log(greenSet);

}

function getNormalBrownSet() {
    const pointers = document.querySelectorAll('.pointer');
  
    let sum = Number(pointers[1].innerHTML) + Number(pointers[4].innerHTML) + Number(pointers[7].innerHTML);

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
    
    let sum = Number(pointers[2].innerHTML) + Number(pointers[5].innerHTML) + Number(pointers[8].innerHTML);

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

function showCard() {
    const shirt = document.querySelector('.shirt');
    
    shirt.addEventListener('click', getShownCard);
}

showCard();

function getShownCard() {
    const shirt = document.querySelector('.shirt');
    const shownCard = document.querySelector('.shown-card');
    const pointers = document.querySelectorAll('.pointer');

    console.log(finishSet.length);

        switch (stage) {
            case 1:
                if (finishSet[0].color === "green") {
                    pointers[0].innerHTML = Number(pointers[0].innerHTML) - 1;
                } else if (finishSet[0].color === "brown") {
                    pointers[1].innerHTML = Number(pointers[1].innerHTML) - 1;
                } else if (finishSet[0].color === "blue") {
                    pointers[2].innerHTML = Number(pointers[2].innerHTML) - 1;
                }
        
                shownCard.src = finishSet[0].cardFace;
        
                if (Number(pointers[0].innerHTML) + Number(pointers[1].innerHTML) + Number(pointers[2].innerHTML) === 0) {
                    stage++;
                }
                break;
            case 2:
                if (finishSet[0].color === "green") {
                    pointers[3].innerHTML = Number(pointers[3].innerHTML) - 1;
                } else if (finishSet[0].color === "brown") {
                    pointers[4].innerHTML = Number(pointers[4].innerHTML) - 1;
                } else if (finishSet[0].color === "blue") {
                    pointers[5].innerHTML = Number(pointers[5].innerHTML) - 1;
                }
        
                shownCard.src = finishSet[0].cardFace;
        
                if (Number(pointers[3].innerHTML) + Number(pointers[4].innerHTML) + Number(pointers[5].innerHTML) === 0) {
                    stage++;
                }
                break;
            case 3:
                if (finishSet[0].color === "green") {
                    pointers[6].innerHTML = Number(pointers[6].innerHTML) - 1;
                } else if (finishSet[0].color === "brown") {
                    pointers[7].innerHTML = Number(pointers[7].innerHTML) - 1;
                } else if (finishSet[0].color === "blue") {
                    pointers[8].innerHTML = Number(pointers[8].innerHTML) - 1;
                }
        
                shownCard.src = finishSet[0].cardFace;
        
                break;
        }
    
    if (finishSet.length === 1) {
        shirt.classList.add('hidden');
    }

    finishSet.splice(0, 1);  
}

