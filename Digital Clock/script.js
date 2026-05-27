const hourContainer = document.getElementById('hour');
const minuteContainer = document.getElementById('minute');
const secondsContainer = document.getElementById('seconds');
const dateTimeContainer = document.getElementById('date-time');

const switchBtn = document.getElementById('dark-light');

let darkMode = true;

function updateTime(){
    let time = new Date();

let hour = String(time.getHours()).padStart(2, '0');
let minute = String(time.getMinutes()).padStart(2, '0');
let seconds = String(time.getSeconds()).padStart(2, '0');



const formattedDay = time.toLocaleDateString('en-US', {weekday: 'long'});
const formattedDate = time.getDate();
const formattedMonth = time.toLocaleDateString('en-US', {month: 'long'});





hourContainer.textContent = hour;
minuteContainer.textContent = minute;
dateTimeContainer.textContent = formattedDay + ", " + formattedDate + " " + formattedMonth + " " + time.getFullYear();

if(secondsContainer.innerText !== seconds){
    

    secondsContainer.classList.remove('animate-slide');
    void secondsContainer.offsetWidth;
    secondsContainer.innerText = seconds;
    secondsContainer. classList.add('animate-slide');
}
}

function switchMode(){
    if(darkMode){
        darkMode = false;
        document.body.style.backgroundColor = 'white';
        switchBtn.textContent = "Switch to Dark Mode";
        switchBtn.style.backgroundColor = 'rgb(4, 4, 41)';
        switchBtn.style.color = 'white'
        dateTimeContainer.style.color = 'rgb(4, 4, 41)';
    }

    else{
        darkMode = true;
        document.body.style.backgroundColor = 'rgb(4, 4, 41)';
        switchBtn.style.backgroundColor = 'white';
        switchBtn.style.color = 'rgb(4, 4, 41)'
        switchBtn.textContent = 'Switch to Light Mode';
        dateTimeContainer.style.color = 'white';
        
    }
}


switchBtn.addEventListener('click', switchMode);

updateTime();

setInterval(updateTime, 1000)

