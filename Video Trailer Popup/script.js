const btnEl = document.querySelector('.btn');
const closeBtnEl = document.querySelector('.close-btn');
const trailerContainerEl = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');

btnEl.addEventListener('click', ()=> {
    trailerContainerEl.classList.remove('active');
})
closeBtnEl.addEventListener('click',()=>{
    trailerContainerEl.classList.add('active');
    videoEl.pause();
    videoEl.currentTime = 0;
})