const stringInput = document.getElementById('string-input');
const resultDisplay = document.getElementById('result-display');



const wordDisplay = document.getElementById('word');
const sentenceDisplay = document.getElementById('sentence');
const characterDisplay = document.getElementById('character');
const paragraphDisplay = document.getElementById('paragraph');


function addAnimation(theobject, value){
    theobject.classList.remove('animated-slide');
    void theobject.offsetWidth;
    theobject.classList.add('animated-slide')
    theobject.textContent = value;
}




function showResults() {
    let textString = stringInput.value;
    let charFormatted = textString.replace(/\n/g, "");
    let wordFormatted = textString.trim().split(/[\s]+/);
    let sentenceFormatted = textString.trim().split(/[.!?]+/);
    let paragraphFormatted = textString.trim().split(/\n+/);


    let character = charFormatted.length;
    let words = wordFormatted.filter(Boolean).length;
    let sentences = sentenceFormatted.filter(Boolean).length;
    let paragraphs = paragraphFormatted.filter(Boolean).length;


    addAnimation(characterDisplay, character);
    addAnimation(wordDisplay, words);
    addAnimation(sentenceDisplay, sentences);
    addAnimation(paragraphDisplay, paragraphs);






}

stringInput.addEventListener('input', showResults);