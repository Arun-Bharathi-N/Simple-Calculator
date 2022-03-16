const inputValue = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let nextValue = 0;

function numberValue(number) {
    if (nextValue) {
        inputValue.innerText = number;
        nextValue = 0;
    } else {
        const displayValue = inputValue.innerText;
        inputValue.innerText =
            displayValue === '0' ? number : displayValue + number;
    }
}

function useOperator(operator) {
    const currentValue = Number(inputValue.innerText);
    if (operatorValue && nextValue) {
        operatorValue = operator;
        return;
    }
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        const calculation = calculate[operatorValue](firstValue, currentValue);
        inputValue.innerText = calculation;
        firstValue = calculation;
    }
    nextValue = 1;
    operatorValue = operator;
}

const calculate = {
    '+': function (firstNumber, secoundNumber) {
        return firstNumber + secoundNumber;
    },
    '-': function (firstNumber, secoundNumber) {
        return firstNumber - secoundNumber;
    },
    '*': function (firstNumber, secoundNumber) {
        return firstNumber * secoundNumber;
    },
    '/': function (firstNumber, secoundNumber) {
        return firstNumber / secoundNumber;
    },
};

function ClickButton() {
    buttons.forEach((btn) => {
        if (btn.classList.length === 0) {
            btn.addEventListener('click', () => numberValue(btn.value));
        } else if (btn.classList.contains('operator')) {
            btn.addEventListener('click', () => useOperator(btn.value));
        }
    });
}
ClickButton();

function clearAll() {
    firstValue = 0;
    operatorValue = '';
    nextValue = 0;
    inputValue.innerText = '0';
}
