const emojiEls = document.querySelectorAll('.emoji');
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('main-container');

let selectedRating = "";
emojiEls.forEach((emoji)=>{
    emoji.addEventListener('click',(e)=>{
        removeActive();
        selectedRating = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add('active');
        e.target.parentNode.classList.add('active');
    });
});

function removeActive() {
    emojiEls.forEach((emoji)=>{
        emoji.classList.remove('active');
    });
};

btnEl.addEventListener('click', ()=>{
    if (selectedRating !== "") {
        containerEl.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback : ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`
    };
});