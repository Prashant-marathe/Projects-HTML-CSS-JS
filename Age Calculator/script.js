const btnEl = document.querySelector('.btn');
const birthDateEl = document.querySelector('#birthday');
const resultEl = document.querySelector('#result');


function calculateAge() {
    const birthDateValue = birthDateEl.value; 
    if(birthDateValue === "") {
        alert("Please Enter Your Age!!");
    }else{
        const age = getAge(birthDateValue);
        resultEl.innerHTML = `You are ${age} ${age > 1 ? "years" : "year"}  old!`
    }
}

function getAge(birthDateValue) {
    const currentDate = new Date();
    const birthDate = new Date(birthDateValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
btnEl.addEventListener('click', calculateAge)