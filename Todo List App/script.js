const addButton = document.getElementById('addBtn');
const toDoDisplay = document.getElementById('tododisplay');
const addInput = document.getElementById('addinput');
const errorCatcher = document.getElementById('error-catcher')
const cover = document.getElementById('cover')

const newTask = document.getElementById('tobedone');
const dateToDo = document.getElementById('datetodo');
const timeToDo = document.getElementById('timetodo');


let isFilling = false;
addInput.style.display = 'none';
errorCatcher.style.display = "none";
cover.style.display = "none";


function hideFields(){
    addInput.style.display = 'none';
        addButton.innerHTML = '+'
        isFilling = false;
        errorCatcher.style.display = 'none';
        cover.style.display = 'none';
}

function addNewTask(){
    if(newTask.value !== "" && dateToDo.value !== "" && timeToDo !== ""){
        let newtoDo = newTask.value;
        let newDate = dateToDo.value;
        let newTime = timeToDo.value;

        hideFields();

        const newChildDiv = document.createElement('div');
        newChildDiv.classList.add('child-item')
        newChildDiv.innerHTML = `<input type="checkbox">
        <div class="tododetails">
          <div class="todoname">${newtoDo}</div>
          <div class="todotime">${newDate}, ${newTime}</div>
        </div>

        <div>
          <button class="remove-btn" id="removeBtn">Remove</button>
        </div>`;
        const removeBtn = newChildDiv.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function(){
            newChildDiv.remove();
        })
        
        toDoDisplay.appendChild(newChildDiv);

       

        newTask.value = "";
        dateToDo.value = "";
        timeToDo.value = "";

    }

    else {
        errorCatcher.textContent = "Input all Fields"
        errorCatcher.style.display = 'block';
    }
}

function toggleInput(){
    if(!isFilling){
        addInput.style.display = 'flex'
        addButton.innerHTML = '&#10003;';
        isFilling = true;
        cover.style.display = 'block';
    }

    else{
        
        addNewTask();
    }
}

addButton.addEventListener('click', toggleInput);

cover.addEventListener('click', hideFields)
