let isX = true;
let isGaming = true;

function handleBoxClick(event){
    const clickedBox = event.target;

    if (isX && isGaming){
        clickedBox.textContent = "X"
        isX = false;
    }

    else if (!isX && isGaming){
        clickedBox.textContent = "O"
        isX = true;
    }

   


    
}



for (let i = 1; i<= 9 ; i++){
    document.getElementById(`box${i}`).addEventListener("click", handleBoxClick)
}