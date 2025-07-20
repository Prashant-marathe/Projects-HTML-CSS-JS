const counterEl = document.querySelectorAll('.counter');

counterEl.forEach(counterEl=>{
    counterEl.innerText = '0';
    incrementCounter();
    function incrementCounter() {
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute('data-ceil');
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);
        counterEl.innerText = currentNum;
        if(currentNum < dataCeil) {
            setTimeout(incrementCounter,50);
        }else{
            counterEl.innerText = dataCeil
        }
}
})