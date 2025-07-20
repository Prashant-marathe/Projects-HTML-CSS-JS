const hourEl = document.getElementById('hour');
const minutesEl = document.getElementById('minutes');
const secondsEl= document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h > 12) {
        h = h - 12;
        ampmEl.innerText = "PM"
    }else{
        ampmEl.innerText = "AM"
    }

    h =  h < 10 ? "0" + h : h;
    m =  m < 10 ? "0" + m : m;
    s =  s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;

    setTimeout(() => {
        updateClock();
    }, 1000)
}
updateClock();