const alphaRadio = document.getElementById('textonly');
const alphaNumRadio = document.getElementById('textandnumbers');
const asciiiRadio = document.getElementById('asciii');
const getPasswordBtn = document.getElementById('getpassword');
const passwordDisplay = document.getElementById('password-display')
const passwordLength = document.getElementById('passwordLength')


let isAlpha= false;
let isAlphaNum = false;
let isAsciii = false;

alphaRadio.addEventListener('click', ()=>{
    if(!isAlpha){
        isAlpha = true;
        isAlphaNum = false;
        isAsciii = false;
        
    }
})

alphaNumRadio.addEventListener('click', ()=>{
    if(!isAlphaNum){
        isAlpha = false;
        isAlphaNum = true;
        isAsciii = false;
        
    }
})

asciiiRadio.addEventListener('click', ()=>{
    if(!isAsciii){
        isAlpha = false;
        isAlphaNum = false;
        isAsciii = true;
        
    }
})

let lengthOfPassword = 8;

passwordLength.addEventListener('input', (event) => {
    lengthOfPassword = parseInt(event.target.value)
    
})


const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789"
const specialChars = '.,/;[]<>?:"{}!@#$%^&*()_+-=';

function generatePassword(){
    let alphaPassword = "";
    let charPool = "";

    if(isAlpha){
        charPool = lowercase + uppercase;
    }
    else if(isAlphaNum){
        charPool = lowercase + uppercase + numbers;
    }

    else if(isAsciii){
        charPool = lowercase + uppercase + numbers + specialChars;
    }

    for (let i = 0; i < lengthOfPassword; i++){
        let randomIndex = Math.floor(Math.random() * charPool.length);
        alphaPassword += charPool[randomIndex]
    }

    
    if(!isAlpha && !isAlphaNum && !isAsciii){
        passwordDisplay.textContent = "Select a Password Type!"
        passwordDisplay.style.color = 'red';
    }

    else{
        passwordDisplay.textContent = alphaPassword;
        passwordDisplay.style.color = 'black';
    }
    
}



getPasswordBtn.addEventListener('click', generatePassword);