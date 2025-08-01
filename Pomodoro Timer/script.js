const timerEl = document.getElementById('timer');
const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = Math.floor(timeLeft % 60);
    let formettedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timerEl.innerHTML = formettedTime;

}


function startTimer() {
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft === 0) {
            clearInterval(interval);
            alert("Times Up!");
            timeLeft = 1500;
            updateTimer();
        }
    },1000);
}
function stopTimer() {
    clearInterval(interval);
}
function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}
startEl.addEventListener('click', startTimer);
stopEl.addEventListener('click', stopTimer);
resetEl.addEventListener('click', resetTimer);