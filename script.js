const container = document.querySelector('.container')
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        if(!action) {
            console.log('number key')
        }
        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            console.log('operator key')
        }
        if(action === 'decimal') {
            console.log('decimal key')
        }
        if(action === 'calculate') {
            console.log('equal key')
        }
    }
})


const display = document.querySelector('.display')
buttons.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
       if(!action) {
            display.textContent = displayedNum + keyContent
        }
        if(action === 'decimal') {
            display.textContent = displayedNum + '.'
        }
        if(action === 'add' ||
           action === 'subtract' ||
           action === 'mulitply' ||
           action === 'divide'
           ) {
            key.classList.add('is-depressed')
            container.dataset.previousKeyType = 'operator'
            const previousKeyType = container.dataset.previousKeyType
               if(!action) {
                 if(previousKeyType === 'operator')
                   display.textContent = keyContent
                     } else {
                       display.textContent = displayedNum + keyContent
                   }
                }
                if(action === 'calculate') {
                    const firstValue = container.dataset.firstValue
                    const operator = calculator.dataset.operator
                    const secondValue = displayedNum

                    display.textContent = calculate(firstValue, operator, secondValue)
                }
           }
   })

// const previousKeyType = container.dataset.previousKeyType
// if(!action) {
//     if(previousKeyType === 'operator')
//     display.textContent = keyContent
// } else {
//     display.textContent = displayedNum + keyContent
// }

buttons.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    }
})


// const add = function(a,b) {
//     let sum = a + b;
//     return sum;
    
// }

// const subtract = function (c,d) {
//     let diff = c - d;
//     return diff;
// }

// const multiply = function(e,f) {
//     let times = e * f;
//     return times;
// }

// const divide = function(g,h) {
//     let divis = g / h;
//     return divis;
// }

// function operate(a, operator, b) {
//     switch(operator) {
//         case '+':
//             return add(a,b)
//             case '*':
//                 return multiply(a,b)
//                 case '-':
//                     return subtract(a,b)
//                     case '/':
//                         return divide(a,b)
//     }
// };

// function addDisplay(num) {
//     let txt = document.getElementById("display").value;
//     txt=txt + num;
//     document.getElementById("display").value=txt;

// }

// function clearNum() {
//   let txt = document.getElementById("display").value;
//   txt=''
//   document.getElementById("display").value=txt;

// }
