const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
updateRate();
function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/a76f621d814bcceabfd8f8ea/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
        const rate = data.conversion_rates[currencySecondEl.value];
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
      exchangeRateEl.innerText = `${worthFirstEl.value}  ${
        currencyFirstEl.value
      } = ${rate + " " + currencySecondEl.value}`;
    });
    
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("cahnge", updateRate);
worthFirstEl.addEventListener("input", updateRate);
