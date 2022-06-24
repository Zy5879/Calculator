let currentNum = "";
let previousNum = "";
let operator = "";

const displayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

const equal = document.querySelector('.equal')
equal.addEventListener('click', calculate);

const clear = document.querySelector('.decimal')

const numberButtons = document.querySelectorAll('.number')

const operators =  document.querySelectorAll('.operator')

numberButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    if(currentNum.length <= 12) {
    currentNum += number;
    displayNumber.textContent = currentNum; 
    }
}

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        operation(e.target.textContent)
    })
})

function operation(op) {
    operator = op
    currentNum = ''
    displayNumber.textContent = previousNum + op;
}

function calculate () {
    if(operator === '+') {
        currentNum + previousNum;
    }

}
// //get values in display
// const display = document.querySelector('.display')
// const keys = document.querySelector('.calcKeys')

// keys.addEventListener('click', e => {
//     if(e.target.matches('button')) {
//         const key = e.target
//         const action = key.dataset.action
//         const keyContent = key.textContent
//         const displayedNum = display.textContent
//         if(!action) {
//             if(displayedNum === '0') {
//                 display.textContent = keyContent
//             } else {
//                 display.textContent = displayedNum + keyContent
//             }
        
//         }
//     }
// })

// // functionality for decimal button
// keys.addEventListener('click', e => {
//     if(e.target.matches('button')) {
//         const key = e.target
//         const action = key.dataset.action
//         const keyContent = key.textContent
//         const displayedNum = display.textContent
//         if(action === 'decimal') {
//             display.textContent = displayedNum + '.'
//         }
//         if (
//             action === 'add' ||
//             action === 'subtract' ||
//             action === 'multiply' ||
//             action === 'divide'
//         ) {
//             key.classList.add('is-depressed')
//         }
//     }
// })