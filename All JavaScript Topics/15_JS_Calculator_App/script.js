// Get all the HTML elements
let firstNumberBox = document.querySelector('#firstNumber');
let secondNumberBox = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let divButton = document.querySelector('#divide-button');
let mulButton = document.querySelector('#multiply-button');
let clearButton = document.querySelector('#clear-button');

// Click on Minus Button
minusButton.addEventListener('click',function() {
   operatorButton.textContent =  minusButton.textContent;
    calculate();
});

// Click on Plus Button
plusButton.addEventListener('click',function() {
    operatorButton.textContent =  plusButton.textContent;
    calculate();
});

// Click on Multiply Button
mulButton.addEventListener('click',function() {
    operatorButton.textContent =  mulButton.textContent;
    calculate();
});

// Click on Divide Button
divButton.addEventListener('click',function() {
    operatorButton.textContent =  divButton.textContent;
    calculate();
});


// Equals Button Logic
equalsButton.addEventListener('click',function() {
    calculate();
});

// calculate Logic
let calculate = () => {
    let firstNumber = firstNumberBox.value;
    let secondNumber = secondNumberBox.value;
    let operator = operatorButton.textContent;
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
        }
        resultButton.textContent = result.toString();
    }
};

// Clear button Logic
clearButton.addEventListener('click',function() {
    firstNumberBox.value = '';
    secondNumberBox.value = '';
    operatorButton.textContent = '+';
    resultButton.textContent = 'RESULT';
});