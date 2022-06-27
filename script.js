const input = document.querySelector('.display')
const keys = document.querySelectorAll('.button')

//numbers popup in display
keys.forEach(button => {
    button.addEventListener('click', e => {
        let value = e.target.dataset.value
        //whenever you click equal just the returns number
        if(value === " ") {
            //changing the innerText from strings to arrays.
            //allowing the numbers to be properly solved
            if(input.innerText.includes('/')) {
                const checkArr = input.innerText.split('/')
                operation('/', checkArr[0], checkArr[1])
            }
            if(input.innerText.includes('+')) {
                const checkArr = input.innerText.split('+')
                operation('+', checkArr[0], checkArr[1])
            }
            if(input.innerText.includes('x')) {
                const checkArr = input.innerText.split('x')
                operation('x', checkArr[0], checkArr[1])
            }
            if(input.innerText.includes('-')) {
                const checkArr = input.innerText.split('-')
                operation('-', checkArr[0], checkArr[1])
            }
        }
        input.innerText += value

        if(value ==='clear') {
            input.innerText = '';
        }
    })
})
//functions that solve math equations
const operation = function(operator, n1, n2) {
    const num1 = Number(n1)
    const num2 = Number(n2)
    if(operator ===  '/') {
        input.innerText = num1 / num2
        console.log(num1 / num2)
    }
    if(operator ===  'x') {
        input.innerText = num1 * num2
        console.log(num1 * num2)
    }
    if(operator ===  '-') {
        input.innerText = num1 - num2
        console.log(num1 - num2)
    }
    if(operator ===  '+') {
        input.innerText = num1 + num2
        console.log(num1 + num2)
    }
}


// function clearDisplay() {
//     input.innerText = ''
// }

// function operate() {
//     if(operator ===)
// }