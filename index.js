const root = document.querySelector(':root')
const startButton = document.getElementById('startGame')
const container = document.querySelector('.container')
const main = document.getElementById('main')
let i = 0
const label1 = document.getElementById('label1')
const label2 = document.getElementById('label2')
const input1 = document.getElementById('namePlayer1')
const input2 = document.getElementById('namePlayer2')

function createDiv (id, borderTop, borderBottom, borderRight, borderLeft, className = 'box') {
    const div = document.createElement('div')
    div.id = id
    div.classList.add(className)
    div.style.borderTop = borderTop
    div.style.borderBottom = borderBottom
    div.style.borderRight = borderRight
    div.style.borderLeft = borderLeft
    div.innerText = ''
    return div
}

function createH2 (id, className = 'TimePlayer') {
    const h2 = document.createElement('h2')
    h2.id = id
    h2.classList.add(className)
    return h2
}

startButton.addEventListener('click', function () {

    function restartGame() {
        const restartGame = document.createElement('button')
            restartGame.innerText = 'Restart Game'
            restartGame.id = 'restartGame'
            main.appendChild(restartGame)
            document.getElementById('restartGame').addEventListener('click', function() {
                container.removeChild(div1)
                container.removeChild(div2)
                container.removeChild(div3)
                container.removeChild(div4)
                container.removeChild(div5)
                container.removeChild(div6)
                container.removeChild(div7)
                container.removeChild(div8)
                container.removeChild(div9)
                container.classList.add('removepadding')
                main.removeChild(timePlayer)
                main.removeChild(restartGame)
                main.append(label1, input1, label2, input2, startButton)
                input1.value = namePlayer1
                input2.value = namePlayer2
                i = 0
            })
    }
    const namePlayer1 = document.getElementById('namePlayer1').value
    const namePlayer2 = document.getElementById('namePlayer2').value
    main.removeChild(startButton)
    main.removeChild(document.querySelector('.input'))
    main.removeChild(document.querySelector('.input'))
    main.removeChild(document.querySelector('.input'))
    main.removeChild(document.querySelector('.input'))
    container.classList.remove('removepadding')
    const timePlayer = createH2('timePlayer')
    main.append(timePlayer)
    const div1 = createDiv(11, null, 'var(--border)', 'var(--border)', null)
    const div2 = createDiv(12, null, 'var(--border)', 'var(--border)', 'var(--border)')
    const div3 = createDiv(13, null, 'var(--border)', null, 'var(--border)')
    const div4 = createDiv(21, 'var(--border)', 'var(--border)', 'var(--border)', null)
    const div5 = createDiv(22, 'var(--border)', 'var(--border)', 'var(--border)', 'var(--border)')
    const div6 = createDiv(23, 'var(--border)', 'var(--border)', null, 'var(--border)')
    const div7 = createDiv(31, 'var(--border)', null, 'var(--border)', null)
    const div8 = createDiv(32, 'var(--border)', null, 'var(--border)', 'var(--border)')
    const div9 = createDiv(33, 'var(--border)', null, null, 'var(--border)')
    container.append(div1, div2, div3, div4, div5, div6, div7, div8, div9)
    const box = document.querySelectorAll('.box')
    let array = [['', '', ''], ['', '', ''], ['', '', '']]
    timePlayer.innerText = `${namePlayer1}'s turn`
    box.forEach (function (boxItem) {
        boxItem.addEventListener('click', function check(ev) {
            if (timePlayer.innerText === `${namePlayer1} win!!!` || timePlayer.innerText === `${namePlayer2} win!!!` || timePlayer.innerText === `Tie!!!`) {
                
                
            } else if (i % 2 === 0) {
                ev.currentTarget.innerText = 'X'
                timePlayer.innerText = `${namePlayer2}'s turn`
                array[parseInt(ev.currentTarget.id[0]) - 1][parseInt(ev.currentTarget.id[1]) - 1] = ev.currentTarget.innerText
                i++
                checkWin(array, parseInt(ev.currentTarget.id[0]) - 1, parseInt(ev.currentTarget.id[1]) - 1, namePlayer1, restartGame, container)
            } else {
                ev.currentTarget.innerText = 'O'
                timePlayer.innerText = `${namePlayer1}'s turn`
                array[parseInt(ev.currentTarget.id[0]) - 1][parseInt(ev.currentTarget.id[1]) - 1] = ev.currentTarget.innerText
                i++
                checkWin(array, parseInt(ev.currentTarget.id[0]) - 1, parseInt(ev.currentTarget.id[1]) - 1, namePlayer2, restartGame, container)
            }

            
            
            boxItem.removeEventListener('click', check)
        })
    })
})

function checkWin (array, row, Column, namePlayer, restartGame, container) {
    if ((array[row][0] === array[row][1] && array[row][1] === array[row][2])) {
        timePlayer.innerText = `${namePlayer} win!!!`
        restartGame()
        container.forEach(function (box) {
            if (box.id[0] === `${row + 1}`) {
                box.classList.add('boxWin')
            }
        })
    } else if (array[0][Column] === array[1][Column] && array[1][Column] === array[2][Column]) {
        timePlayer.innerText = `${namePlayer} win!!!`
        restartGame()
        container.forEach(function (box) {
            if (box.id[1] === `${Column + 1}`) {
                box.classList.add('boxWin')
            }
        })
    } else if (array[1][1] !== '') {
        if (array[0][0] === array[1][1] && array[1][1] === array[2][2]) {
            timePlayer.innerText = `${namePlayer} win!!!`
            restartGame()
            container.forEach(function (box) {
                document.getElementById('11').classList.add('boxWin')
                document.getElementById('22').classList.add('boxWin')
                document.getElementById('33').classList.add('boxWin')
            })
        } else if ((array[0][2] === array[1][1] && array[1][1] === array[2][0])) {
            timePlayer.innerText = `${namePlayer} win!!!`
            restartGame()
            document.getElementById('13').classList.add('boxWin')
            document.getElementById('22').classList.add('boxWin')
            document.getElementById('31').classList.add('boxWin')
        }
    } else if (i === 9) {
        timePlayer.innerText = `Tie!!!`
        restartGame()
    }
}

const switchTheme = document.getElementById('switchtheme')
switchTheme.addEventListener('click', function() {
    if(main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#ddd')
        root.style.setProperty("--font-color", "#000")
        root.style.setProperty("--primary-color", "rgb(0, 180, 0)")
        main.dataset.theme = "light"
    } else {
        root.style.setProperty('--bg-color', '#333')
        root.style.setProperty("--font-color", "#fff")
        root.style.setProperty("--primary-color", "rgb(40, 240, 40)")
        main.dataset.theme = "dark"
    }
})
