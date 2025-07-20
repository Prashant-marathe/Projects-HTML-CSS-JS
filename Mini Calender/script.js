const monthName = document.getElementById("monthname");
const dayName = document.getElementById("dayname");
const dayNumber = document.getElementById("daynumber");
const Year = document.getElementById("year");

const date = new Date();

const month = date.getMonth();
monthName.innerText = date.toLocaleString("en", {
    month:"long"
})

dayName.innerText = date.toLocaleString("en", {
    weekday:"long"
})

dayNumber.innerText = date.getDate();

Year.innerText = date.getFullYear();
