let currentNum = '';
let newNum = ''
let operators = ''

const currentNumber = document.querySelector('.currentNumber')

const numbers = document.querySelectorAll('.number')

const clear = document.querySelector('.clear')

const equal = document.querySelector('.equal')

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