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

gameMode.addEventListener('change', resetGame);






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
    const emptyBoxes = boxesArray.filter(box => box.textContent === "");
    let boxIndex = Math.floor(Math.random() * emptyBoxes.length);
    console.log(boxIndex)
    emptyBoxes[boxIndex].textContent = "O";
    emptyBoxes[boxIndex].style.color = 'red';
    console.log(emptyBoxes[boxIndex]);
    isX = true;
    displayScreen.textContent = "It is Player X's turn";
    checkForWinner();
}









let isX = true;
let isGaming = true;
let isDraw;


function checkForWinner() {




    for (let i = 0; i < winningArray.length; i++) {
        if (winningArray[i][0].textContent !== "" && winningArray[i][1].textContent === winningArray[i][0].textContent && winningArray[i][2].textContent === winningArray[i][1].textContent) {
            
            if(gameMode.value === '2players'){
                displayScreen.textContent = `Player ${winningArray[i][0].textContent} wins`}
            else{
                if(winningArray[i][0].textContent === "X"){
                    displayScreen.textContent = "Player X wins!"
                    displayScreen.style.color = 'blue';
                }
                else{
                    displayScreen.textContent = "Computer wins!"
                    displayScreen.style.color = 'red'
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

