const randomBtn = document.getElementById('random');
const switchBtn = document.getElementById('switch');
const colorCode = document.getElementById('color-code');
const codeType = document.getElementById('code-type');

let isHEX = false;



function generateRandomRGB() {
    let red = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);

    let rgbCode = "rgb(" + red + ", " + green + ", " + blue + ")";

    codeType.textContent = "RGB Code";
    colorCode.textContent = rgbCode;
    document.body.style.backgroundColor = rgbCode;
}

function generateRandomHex() {
    const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexChars.length)
        hexColor += hexChars[randomIndex];
    }


    colorCode.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    codeType.textContent = "HEX Code"


}

function switchToHex() {
    if (isHEX) {
        isHEX = false;
        switchBtn.textContent = "Switch to Hex";
        randomBtn.textContent = "Generate random RGB Color";




    }

    else {
        isHEX = true;
        switchBtn.textContent = "Switch to RGB";
        randomBtn.textContent = "Generate random HEX Color";

    }
}

function generateRandomColor() {
    if (isHEX === false) {
        generateRandomRGB();
    }
    else {
        generateRandomHex();
    }
}

generateRandomRGB()

randomBtn.addEventListener('click', generateRandomColor);

switchBtn.addEventListener('click', switchToHex);