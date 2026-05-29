const counter = document.getElementById('count');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const resetBtn = document.getElementById('resetBtn');


let count = 0;

function updateCounter() {
    counter.textContent = count;
}

function addCounter() {
    count++;
    updateCounter();

}

function removeCounter() {

    if (count >= 1) {
        count--;
        updateCounter();
    }

}

function resetCounter() {

    count = 0;
    updateCounter();


}

addBtn.addEventListener('click', addCounter);
removeBtn.addEventListener('click', removeCounter);
resetBtn.addEventListener('click', resetCounter);






