import { cardArray } from "./data.js";

const playedCard = document.getElementById('played-card');
const pickCard = document.getElementById('pick-card');
const playerCards = document.getElementById('player-cards');
const playerCard = document.getElementById('player-card');
const computerCards = document.getElementById('computer-cards');
const cardsLeft =  document.getElementById('cards-left');
const pickSlide = document.getElementById('pick-slide');
const playSlide = document.getElementById('play-slide');
const prevBtn = document.getElementById('showprevbtn');
const nextBtn = document.getElementById('shownextbtn');
const cardsMore = document.getElementById('cards-more');
const generalPrompt = document.getElementById('general-prompt');
const cardsCount = document.getElementById('cards-count');
const computerPlaySlide = document.getElementById('computer-play-slide');
const computerPickSlide = document.getElementById('computer-pick-slide');

let nextFactor = 0;
let prevFactor = 0;
let previousfactor;
let playerCardQuantity = 0;

nextBtn.addEventListener('click', () => {
    let difference = playerCardQuantity - nextFactor;
    if(difference > 5 && playerCardQuantity >= 5){
        nextFactor += 1;
        prevFactor -=1;
        playerCards.style.left = `-${nextFactor * 100}px`;
        
        return nextFactor;
    }
  
   })

   prevBtn.addEventListener('click', () => {
    let difference = playerCardQuantity - prevFactor;
   
        if(nextFactor > 0){
            prevFactor += 1;
            nextFactor -= 1;
        playerCards.style.left = `${prevFactor * 100}px`;
        }
    
    
        
    
  
   })





let playerCardsArray = [];
let playedCardsArray = [];
let computerCardsArray = [];
let computerPlayableCards = []



function playerPickCard(){
    let randomIndex = Math.floor(Math.random() * shuffledCards.length);
    playerCardsArray.push(shuffledCards[randomIndex])
    shuffledCards.splice(randomIndex, 1);
    cardsLeft.textContent = shuffledCards.length;

    playerCards.innerHTML = "";

    pickSlide.innerHTML = '<img src="whotDeck/whot-back.png" alt="">';
    pickSlide.classList.remove('pick-slide');
    void pickSlide.offsetWidth;
    pickSlide.classList.add('pick-slide');
    pickSlide.addEventListener('animationend', () => {
        pickSlide.innerHTML = '';
    }, {once: true})
    displayPlayerCard();
    showCardsLeft();
    playerCardQuantity = playerCardsArray.length;
   

    if(playerCardQuantity > 5){
        nextBtn.style.display = "block";
        prevBtn.style.display = "block";
        cardsMore.style.display = "block";
        cardsMore.textContent = `+${playerCardsArray.length - 5}`;
        
    }

    generalPrompt.textContent = 'Computer is thinking...';

}


   


   
function showCardsLeft(){
    cardsCount.textContent = `Player: ${playerCardsArray.length} cards;
                              Computer: ${computerCardsArray.length} cards`
}

let gameStarted = false;

pickCard.addEventListener('click', handlePickOneCard);



function displayPlayedCard(){
    playedCard.innerHTML = `<img src="${playedCardsArray[playedCardsArray.length - 1][2]}" alt="">`;
}

function handleComputersTurn(){
    computerPlayableCards = [];
    for(let i = 0; i < computerCardsArray.length; i++){
        if(computerCardsArray[i][0] === playedCardsArray[playedCardsArray.length - 1][0]  ||  
            computerCardsArray[i][1] === playedCardsArray[playedCardsArray.length - 1][1]){
                computerPlayableCards.push(computerCardsArray[i]);
            }
    }

    if(computerPlayableCards.length !== 0){
        let playIndex = Math.floor(Math.random() * computerPlayableCards.length);
        console.log(playIndex);
        let chosenCard = computerPlayableCards[playIndex];
        playedCardsArray.push(chosenCard);
        computerPlaySlide.innerHTML = `<img src="${chosenCard[2]}" alt="">`
           computerPlaySlide.classList.remove('computer-play-slide');
            void computerPlaySlide.offsetWidth;
            computerPlaySlide.classList.add('computer-play-slide');
            computerPlaySlide.addEventListener('animationend', () => {
                computerPlaySlide.innerHTML = '';
            }, {once: true})


        computerCardsArray = computerCardsArray.filter(card  =>{ 
            return card !== chosenCard;
        });

       
        displayComputerCard();
        displayPlayedCard();
        showCardsLeft();
        generalPrompt.textContent = '';

    }

    else{
        computerPicksOne();
    }

}

function computerPicksOne(){
    const randomIndex = Math.floor(Math.random() * shuffledCards.length);
    computerCardsArray.push(shuffledCards[randomIndex])
    shuffledCards.splice(randomIndex, 1);
    cardsLeft.textContent = shuffledCards.length;

    computerPickSlide.innerHTML = `<img src="whotDeck/whot-back.png" alt="">`
    computerPickSlide.classList.remove('computer-pick-slide');
     void computerPickSlide.offsetWidth;
     computerPickSlide.classList.add('computer-pick-slide');
     computerPickSlide.addEventListener('animationend', () => {
         computerPickSlide.innerHTML = '';
     }, {once: true})


    computerCards.innerHTML = "";
    displayComputerCard();
    showCardsLeft();

    generalPrompt.textContent = '';

}

function displayComputerCard(){
    computerCards.innerHTML = "";
    for(let i = 0; i < computerCardsArray.length; i++){
        const newChild = document.createElement('img');
        newChild.id = 'player-card';
        newChild.src = 'whotDeck/whot-back.png';
        computerCards.appendChild(newChild);
        newChild.dataset.index = i;
        
    }
}

function handlePlayerPlay(event){
    const clickedIndex = parseInt(event.target.dataset.index);

    if(playedCardsArray[playedCardsArray.length - 1][0] === playerCardsArray[clickedIndex][0] || 
        playedCardsArray[playedCardsArray.length - 1][1] === playerCardsArray[clickedIndex][1]){
            playedCardsArray.push(playerCardsArray[clickedIndex])
            playerCardsArray.splice(clickedIndex, 1);
            playerCards.innerHTML = "";
            playSlide.innerHTML = `<img src="${playedCardsArray[playedCardsArray.length - 1][2]}" alt="">`
            playSlide.classList.remove('play-slide');
            void playSlide.offsetWidth;
            playSlide.classList.add('play-slide');
            playSlide.addEventListener('animationend', () => {
                playSlide.innerHTML = '';
            }, {once: true})
            
        
            displayPlayerCard();
            displayPlayedCard();
            showCardsLeft();
        
            playerCardQuantity -= 1;
            cardsMore.textContent = `+${playerCardsArray.length - 5}`;
        
        
        
            if(playerCardQuantity <= 5){
                nextBtn.style.display = "none";
                prevBtn.style.display = "none";
                playerCards.style.left = '0px';
                cardsMore.style.display = "none";
            } 

            generalPrompt.textContent = 'Computer is thinking...';
            
        setTimeout(() => {handleComputersTurn();}, 3000);
        }
    else{
        generalPrompt.textContent = 'Number or shape must Match';
    }
    

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



function playFirstCard(){
    const randomIndex = Math.floor(Math.random() * shuffledCards.length);
    playedCardsArray.push(shuffledCards[randomIndex]);
    shuffledCards.splice(randomIndex, 1);
    cardsLeft.textContent = shuffledCards.length;
    displayPlayedCard();

    for(let i = 1; i <= 5; i++){
        playerPickCard();
        computerPicksOne();
    }
}
function handlePickOneCard(){
    playerPickCard();

    setTimeout(() => {handleComputersTurn();}, 3000);
}

function displayPlayerCard(){

    playerCardsArray = shuffleCards(playerCardsArray);

    
    

    for(let i = 0; i < playerCardsArray.length; i++){
        const newChild = document.createElement('img');
        newChild.id = 'player-card';
        newChild.src = playerCardsArray[i][2];
        playerCards.appendChild(newChild);
        newChild.addEventListener('click', handlePlayerPlay);
        newChild.dataset.index = i;
        
    }
}

