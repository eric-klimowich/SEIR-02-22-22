
const btn = document.querySelector('button')

btn.addEventListener('click', function(evt) {
    const liEl = document.createElement('li')
    const inpEl = document.querySelector('input')
    liEl.textContent = inpEl.value
    document.querySelector('ul').appendChild(liEl)
    inpEl.value = ''
})

document.querySelector('ul').addEventListener('click', handleClick)

function handleClick(evt) {
    if (evt.target.style.color === 'orange') {
        evt.target.style.color = 'black'
    } else {
        evt.target.style.color = 'orange'
    }
}


const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

winningCombo = []