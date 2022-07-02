// let tempArray  = [];
// let tempNum2 = [];
  
const input = document.querySelector('.display')
const keys = document.querySelectorAll('.buttons')
// const equals = document.querySelector('.equal')

//numbers popup in display
keys.forEach(button => {
    button.addEventListener('click', e => {
        let value = e.target.dataset.value
        //whenever you click equal just the returns number
        // whenever you click any of these operators, first pair of numbers are solved
         if(
            value === " " ||
            value === "x" ||
            value === "/" ||
            value === "+" ||
            value === "-"
            ) {
            //changing the innerText from strings to arrays.
            //allowing the numbers to be properly solved
            if(input.innerText.includes('/')) {
                const checkArr = input.innerText.split('/')
                operate('/', checkArr[0], checkArr[1])
            }
            if(input.innerText.includes('+')) {
                const checkArr = input.innerText.split('+')
                operate('+', checkArr[0], checkArr[1])
            }
            if(input.innerText.includes('x')) {
                const checkArr = input.innerText.split('x')
                operate('x', checkArr[0], checkArr[1])
            }
            if(input.innerText.includes('-')) {
                const checkArr = input.innerText.split('-')
                operate('-', checkArr[0], checkArr[1])
            }
        }
        //allows you to create string of numbers
         input.innerText += value
        
        //clears display
        if(value === 'clear') {
         input.innerText = '';
        }
    
    })
})

//functions that solve math equations
const operate = function(operator, n1, n2) {
    const num1 = Number(n1)
    const num2 = Number(n2)
    if(operator ===  '/') {
        finalValue = num1 / num2
        input.innerText = finalValue
    //  return num1 / num2
    }
    if(operator ===  'x') {
        finalValue = num1 * num2
        input.innerText = finalValue
        // console.log(num1 * num2)
        // return num1 * num2
    }
    if(operator ===  '-') {
        finalValue = num1 - num2
        input.innerText = finalValue;
        // console.log(num1 - num2)
        // return num1 - num2
    }
    if(operator ===  '+') {
        finalValue = num1 + num2
        input.innerText = finalValue;
        // console.log(num1 + num2)
        // return num1 + num2
    }

}




// function clearDisplay() {
//     input.innerText = ''
// }

// function operate() {
//     if(operator ===)
// }