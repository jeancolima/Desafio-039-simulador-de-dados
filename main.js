let currentCard = "card-1";
const cardOne = document.querySelector('#card-1');
const cardTwo = document.querySelector('#card-2');
const cardThree = document.querySelector('#card-3');
const cardFour = document.querySelector('#card-4');
const btnPreviousCard = document.querySelector('.btn-previous-card');
const btnNextCard = document.querySelector('.btn-next-card');
const resultTextOne = document.querySelector('#card-1 .dice-result-text');
const btnRollOne = document.querySelector('#card-1 .btn-roll');
const resultTextTwo = document.querySelector('#card-2 .dice-result-text');
const btnRollTwo = document.querySelector('#card-2 .btn-roll');
const resultTextThree = document.querySelector('#card-3 .dice-result-text');
const btnRollThree = document.querySelector('#card-3 .btn-roll');
const resultTextFour = document.querySelector('#card-4 .dice-result-text');
const btnRollFour = document.querySelector('#card-4 .btn-roll');

btnPreviousCard.addEventListener('click', () => {
    swapPreviousCard();
});

btnNextCard.addEventListener('click', () => {
    swapNextCard();
});

btnRollOne.addEventListener('click', () => {
    let rolledNumber = Math.floor(Math.random() * 6) + 1;

    resultTextOne.textContent = rolledNumber;
});

btnRollTwo.addEventListener('click', () => {
    let rolledNumber = Math.floor(Math.random() * 12) + 1;

    resultTextTwo.textContent = rolledNumber;
});

btnRollThree.addEventListener('click', () => {
    let rolledNumber = Math.floor(Math.random() * 20) + 1;

    resultTextThree.textContent = rolledNumber;
});

btnRollFour.addEventListener('click', () => {
    let rolledNumber = Math.floor(Math.random() * 100) + 1;

    resultTextFour.textContent = rolledNumber;
});

function swapPreviousCard() {
    switch (currentCard) {
        case 'card-2':
            cardOne.style.display = "flex";
            currentCard = "card-1";
            break;
        case 'card-3':
            cardTwo.style.display = "flex";
            currentCard = "card-2";
            break;
        case 'card-4':
            cardThree.style.display = "flex";
            currentCard = "card-3";
            break;
    };
};

function swapNextCard() {
    switch (currentCard) {
        case 'card-1':
            cardOne.style.display = "none";
            currentCard = "card-2";
            break;
        case 'card-2':
            cardTwo.style.display = "none";
            currentCard = "card-3";
            break;
        case 'card-3':
            cardThree.style.display = "none";
            currentCard = "card-4";
            break;
    };
};