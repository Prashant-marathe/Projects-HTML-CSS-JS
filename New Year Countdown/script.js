const YearEl = document.querySelector(".year");
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const nextYear = new Date().getFullYear() + 1;

const newYearDate = new Date(`Jan 1 ${nextYear} 00:00:00 `).getTime();
updateCountDown();
function updateCountDown() {
    const now = new Date().getTime();
    const gap = newYearDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let d = Math.floor(gap / day);
    d = d < 10? "0" + d : d;
    let h = Math.floor((gap % day) / hour);
    h = h < 10? "0" + h : h;
    let m = Math.floor((gap % hour) / minute);
    m = m < 10? "0" + m : m;
    let s = Math.floor((gap % minute) / second);
    s = s < 10? "0" + s : s;

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    YearEl.innerText = nextYear;
    setTimeout(updateCountDown, 1000);
    
}