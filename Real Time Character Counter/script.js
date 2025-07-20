const textareaEl = document.getElementById('textarea');
const textCounterEl = document.getElementById('Text-counter');
const remainingCounterEl = document.getElementById('Remaining-counter');
textareaEl.addEventListener('keyup',()=>{
    updateCharacters();
})

function updateCharacters(){
    textCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute('maxlength') - textareaEl.value.length;
}