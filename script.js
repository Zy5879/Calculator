//get values in display
const display = document.querySelector('.display')
const keys = document.querySelector('.calcKeys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        if(!action) {
            if(displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        
        }
    }
})

// functionality for decimal button
keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        if(action === 'decimal') {
            display.textContent = displayedNum + '.'
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
        }
    }
})