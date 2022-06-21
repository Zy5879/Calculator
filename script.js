//get values in display
const display = document.querySelector('.display')
const keys = document.querySelector('.calcKeys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        
    }
})