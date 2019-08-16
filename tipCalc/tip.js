const numbers = document.querySelector('#numbers');
const display = document.querySelector('.bill-amount')


numbers.addEventListener('click' , e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
        if (action ==='decimal') {
            display.textContent = displayedNum + '.'
        }
        if (action === 'clear') {
            display.textContent = '0'
        }
    }
    
})
