const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');
const weightConditionEl = document.getElementById('weight-condition')
function calculateBMI() {
    const heightValue = document.getElementById('height').value / 100;
    const weightValue = document.getElementById('weight').value;
    
    const bmiValue = weightValue / (heightValue * heightValue);
    resultEl.value = bmiValue.toFixed(2);
    
    if(bmiValue < 18.5) {
        weightConditionEl.innerText = " Under-Weight";
    }else if (bmiValue >= 18.5 && bmiValue < 24.9){
        weightConditionEl.innerText = " Normal-Weight";
    }else if (bmiValue >= 25 && bmiValue < 29.9) {
        weightConditionEl.innerText = " OverWeight";
    }else if (bmiValue >= 30) {
        weightConditionEl.innerText = " Obesity";
    }
}

btnEl.addEventListener('click',calculateBMI)