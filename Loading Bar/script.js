const counterEl = document.querySelector('.counter');
const loadingBarFrontEl = document.querySelector('.loading-bar-front');

let index = 0;
updateNum();
function updateNum(){
    counterEl.innerText = index + "%";
    loadingBarFrontEl.style.width = index + "%";
    index++;
    if(index < 101){
        setTimeout(updateNum, 20);
    }
}