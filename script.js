let currentNum = '';
let newNum = '';
let operators = '';

function operate(operators,a,b) {
    switch(operators) {
        case "+": return a + b;
        case "-": return a - b;
        case "x": return a * b;
        case "/": return a / b;
    }
}

const currentNumber = document.querySelector('.currentNumber')

const numbers = document.querySelectorAll('.number')

const clear = document.querySelector('.clear')

const operations = document.querySelectorAll('.operator')

const equal = document.querySelector('.equal')

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', e => {
    addDec(e.target.textContent)
});

function addDec(number) {
    currentNum += number
  currentNumber.textContent = currentNum;
}



numbers.forEach(btn => {
    btn.addEventListener('click', e => {
        handleNum(e.target.textContent)
    });
});

function handleNum(number) {
    if(currentNum.length <= 12) {
    currentNum += number;
    currentNumber.textContent = currentNum;
    }
}

