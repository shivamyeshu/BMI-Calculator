document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let bmi = weight / (height ** 2);
    let resultText;

    if (bmi < 18.5) {
        resultText = `Your BMI is ${bmi.toFixed(2)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = `Your BMI is ${bmi.toFixed(2)}, so you have a normal weight.`;
    } else {
        resultText = `Your BMI is ${bmi.toFixed(2)}, so you are overweight.`;
    }

    document.getElementById('result').textContent = resultText;
});
