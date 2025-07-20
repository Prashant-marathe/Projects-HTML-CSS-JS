const inputEl = document.getElementById("input");
const kgEl = document.querySelector(".kg");
const resultEl = document.getElementById("result");
inputEl.addEventListener("input", () => {
  const weight = inputEl.value * 0.453592;
  
    if (inputEl.value < 0) {
        kgEl.style.color = "red";
        kgEl.innerText = "Please Enter a valid weight!!";
    } else if (inputEl.value === " ") {
      kgEl.style.color = "darkblue";
      kgEl.innerText = `Your Weight In KG Is : 00`;
    } else {
      kgEl.style.color = "darkblue";
      kgEl.innerText = `Your Weight In KG Is : ${(resultEl.value = weight)} Kg`;
    }
});
