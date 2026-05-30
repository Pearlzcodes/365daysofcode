import { cardArray } from "./data.js";

const playedCard = document.getElementById('played-card');
const pickCard = document.getElementById('pick-card');
const playerCards = document.getElementById('player-cards');
const playerCard = document.getElementById('player-card');
const computerCards = document.getElementById('computer-cards');
const cardsLeft =  document.getElementById('cards-left');



let gameStarted = false;

pickCard.addEventListener('click', handlePickOneCard);



let playerCardsArray = [];
let playedCardsArray = [];
let computerCardsArray = [];

function hadleComputersTurn(){

}

function computerPicksOne(){
    const randomIndex = Math.floor(Math.random() * shuffledCards.length);
    computerCardsArray.push(shuffledCards[randomIndex])
    shuffledCards.splice(randomIndex, 1);
    cardsLeft.textContent = shuffledCards.length;

    computerCards.innerHTML = "";
    displayComputerCard();

}

function displayComputerCard(){
    for(let i = 0; i < computerCardsArray.length; i++){
        const newChild = document.createElement('img');
        newChild.id = 'player-card';
        newChild.src = computerCardsArray[i][2];
        computerCards.appendChild(newChild);
        newChild.dataset.index = i;
        
    }
}

function handlePlayerPlay(event){
    const clickedIndex = parseInt(event.target.dataset.index);
    playedCardsArray.push(playerCardsArray[clickedIndex])
    console.log(clickedIndex);
    playerCardsArray.splice(clickedIndex, 1);
    playerCards.innerHTML = "";
    displayPlayerCard();
    displayPlayedCard();

}

function shuffleCards(array){
    for(let i = 0; i < array.length; i++){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
return array;
}

let shuffledCards = shuffleCards(cardArray);
playFirstCard();


console.log(shuffledCards.length)

function playFirstCard(){
    const randomIndex = Math.floor(Math.random() * shuffledCards.length);
    playedCardsArray.push(shuffledCards[randomIndex]);
    shuffledCards.splice(randomIndex, 1);
    cardsLeft.textContent = shuffledCards.length;
    displayPlayedCard();

    for(let i = 1; i <= 5; i++){
        handlePickOneCard();
        computerPicksOne();
    }
}
function handlePickOneCard(){
    const randomIndex = Math.floor(Math.random() * shuffledCards.length);
    playerCardsArray.push(shuffledCards[randomIndex])
    shuffledCards.splice(randomIndex, 1);
    cardsLeft.textContent = shuffledCards.length;

    playerCards.innerHTML = "";
    displayPlayerCard();
}

function displayPlayerCard(){
    
    for(let i = 0; i < playerCardsArray.length; i++){
        const newChild = document.createElement('img');
        newChild.id = 'player-card';
        newChild.src = playerCardsArray[i][2];
        playerCards.appendChild(newChild);
        newChild.addEventListener('click', handlePlayerPlay);
        newChild.dataset.index = i;
        
    }
}

function displayPlayedCard(){
    playedCard.innerHTML = `<img src="${playedCardsArray[playedCardsArray.length - 1][2]}" alt="">`;
}