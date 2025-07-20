const btnEl = document.getElementById('btn');
const billInputEl = document.getElementById('bill-input');
const tipInputEl = document.getElementById('tip-input');
const totalEl = document.getElementById('total')

function calculateTotal(){
   const billValue = billInputEl.value;
   const tipValue = tipInputEl.value;
   const totalValue = (billValue * (1 + tipValue / 100)).toFixed(2);

   totalEl.innerText = totalValue + " ₹";

}
btnEl.addEventListener('click',calculateTotal)