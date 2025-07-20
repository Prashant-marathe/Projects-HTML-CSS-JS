const magnifierEl = document.querySelector('.magnifier');
const searchBarContainerEl = document.querySelector('.search-bar-container');

magnifierEl.addEventListener("click",()=> {
    searchBarContainerEl.classList.toggle("active");
})