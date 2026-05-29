const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
const displayScreen = document.getElementById('displayscreen');
const resetBtn = document.getElementById('reset-btn');
const gameMode = document.getElementById('game-mode');
const scoreDisplay = document.getElementById('scores')

gameMode.addEventListener('change', resetGame);

gameMode.addEventListener('change', () =>{
playerOScore = 0;
computerScore = 0;
playerXScore = 0;
scoreDisplay.textContent = "";
})


let playerXScore = 0;
let computerScore = 0;
let playerOScore = 0;




let winningArray = [[box1, box2, box3],
[box4, box5, box6],
[box7, box8, box9],
[box1, box4, box7],
[box2, box5, box8],
[box3, box6, box9],
[box1, box5, box9],
[box3, box5, box7]]

let boxesArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

function resetGame() {
    for (let i = 0; i < boxesArray.length; i++) {
        boxesArray[i].textContent = '';
    }
    isGaming = true;
    isX = true;
    displayScreen.textContent = "It's Player X's turn";
    displayScreen.style.color = 'black'

}

resetBtn.addEventListener('click', resetGame)

function computersTurn() {

    for(let i = 0; i < winningArray.length; i++){
        if(winningArray[i][0].textContent === "O" && winningArray[i][1].textContent === "O" && winningArray[i][2].textContent === "" && !isX){
            winningArray[i][2].textContent = "O";
            winningArray[i][2].style.color = "red";
            goRandom = false;
            displayScreen.textContent = "It is Player X's turn";
            checkForWinner();
            console.log("Win Case 1")
            return;
        }

        else if(winningArray[i][0].textContent === "O" && winningArray[i][1].textContent === "" && winningArray[i][2].textContent === "O" && !isX){
            winningArray[i][1].textContent = "O";
            winningArray[i][1].style.color = "red";
            isX = true;
            displayScreen.textContent = "It is Player X's turn";
            checkForWinner();
            console.log("Win Case 2")
            return;
        }

        else if(winningArray[i][0].textContent === "" && winningArray[i][1].textContent === "O" && winningArray[i][2].textContent === "O" && !isX){
            winningArray[i][0].textContent = "O";
            winningArray[i][0].style.color = "red";
            isX = true;
            displayScreen.textContent = "It is Player X's turn";
            checkForWinner();
            console.log("Win Case 3")
            return;
        }

    }

    for(let i = 0; i < winningArray.length; i++){

        if(winningArray[i][0].textContent === "X" && winningArray[i][1].textContent === "X" && winningArray[i][2].textContent === "" && !isX){
            winningArray[i][2].textContent = "O";
            winningArray[i][2].style.color = "red";
            isX = true;
            displayScreen.textContent = "It is Player X's turn";
            checkForWinner();
            console.log("Defense Case 1");
            return;
        }

        else if(winningArray[i][0].textContent === "X" && winningArray[i][1].textContent === "" && winningArray[i][2].textContent === "X" && !isX){
            winningArray[i][1].textContent = "O";
            winningArray[i][1].style.color = "red";
            isX = true;
            displayScreen.textContent = "It is Player X's turn";
            checkForWinner();
            console.log("Defense Case 2")
            return;
        }

        else if(winningArray[i][0].textContent === "" && winningArray[i][1].textContent === "X" && winningArray[i][2].textContent === "X" && !isX){
            winningArray[i][0].textContent = "O";
            winningArray[i][0].style.color = "red";
            goRandom = false;
            isX = true;
            displayScreen.textContent = "It is Player X's turn";
            checkForWinner();
            console.log("Defense Case 3")
            return;
        }
        
        
    }

       
            const emptyBoxes = boxesArray.filter(box => box.textContent === "");
            let boxIndex = Math.floor(Math.random() * emptyBoxes.length);
            console.log(boxIndex)
            emptyBoxes[boxIndex].textContent = "O";
            emptyBoxes[boxIndex].style.color = 'red';
            console.log(emptyBoxes[boxIndex]);
            isX = true;
            displayScreen.textContent = "It is Player X's turn";
            checkForWinner();
            console.log("Played Randomly")
            
        


}









let isX = true;
let isGaming = true;
let isDraw;


function checkForWinner() {




    for (let i = 0; i < winningArray.length; i++) {
        if (winningArray[i][0].textContent !== "" && winningArray[i][1].textContent === winningArray[i][0].textContent && winningArray[i][2].textContent === winningArray[i][1].textContent) {
            
            if(gameMode.value === '2players'){
                if(winningArray[i][0].textContent === "X"){
                    playerXScore += 1;
                    displayScreen.textContent = 'Player X wins'
                    displayScreen.style.color = 'blue';
                }
                else{
                    playerOScore += 1;
                    displayScreen.textContent = 'Player O wins';
                    displayScreen.style.color = 'red';
                }

                }
            else{
                if(winningArray[i][0].textContent === "X"){
                    displayScreen.textContent = "Player X wins!"
                    displayScreen.style.color = 'blue';
                    playerXScore += 1;
                }
                else{
                    displayScreen.textContent = "Computer wins!"
                    displayScreen.style.color = 'red';
                    computerScore += 1
                }
            }
            isGaming = false;
        }
    }

    /*if(box1.textContent !== "" && box2.textContent !== "" && box3.textContent !== "" && box4.textContent !== ""
    && box5.textContent !== "" && box6.textContent !== "" && box7.textContent !== "" && box8.textContent !== ""
    && box9.textContent !== "" && isGaming){
        displayScreen.textContent = "It's a Draw";
        
    }*/

    const allFilled = boxesArray.every(box => box.textContent !== "");

    if (allFilled && isGaming) {
        displayScreen.textContent = "It's a Draw!!!";
        isGaming = false;
    }

    /* for(let i = 0; i < 9; i++){
    if(boxesArray[i].textContent === ""){
        isDraw = false;
        break;
    }

    else{
        isDraw = true;
    }
}

if(isDraw && isGaming){
    displayScreen.textContent = "It's a draw!!!";
    isGaming = false;
} */
scoreDisplay.textContent = gameMode.value === '1player' ?  `Player X: ${playerXScore}....Computer: ${computerScore}` : `Player X: ${playerXScore}\n Player O: ${playerOScore}`

}



function handleBoxClick(event) {
    const clickedBox = event.target;

    if (isX && isGaming && clickedBox.textContent === "") {
        clickedBox.textContent = "X"
        clickedBox.style.color = 'Blue';
        isX = false;
        displayScreen.textContent = "It's Player O's turn";
        checkForWinner();
        let randomTime = Math.floor(Math.random() * 5000)
        console.log(randomTime);
        if (isGaming && gameMode.value === '1player') {
            displayScreen.textContent = "Computer is thinking...";
            setTimeout(computersTurn, randomTime)
        }

    }

    else if (!isX && isGaming && clickedBox.textContent === "" && gameMode.value === '2players') {
        clickedBox.textContent = "O"
        clickedBox.style.color = 'red';
        isX = true;
        displayScreen.textContent = "It's Player X's turn";
        checkForWinner();
    }



}



for (let i = 1; i <= 9; i++) {
    document.getElementById(`box${i}`).addEventListener("click", handleBoxClick)
}

