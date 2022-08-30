

const container = document.querySelector('#container');
const erase = document.querySelector('#erase');
const pinkMode = document.querySelector('#pinkMode');
const gayMode = document.querySelector('#gayMode');


let size = parseInt(Math.floor(prompt('Enter amount: (1-100)')));


container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++) {
    let grid = document.createElement('div');
    grid.setAttribute('id', 'box');
    grid.classList.add('box');
    container.appendChild(grid);
} 

    const boxAll = document.querySelectorAll('.box');
    boxAll.forEach(function (boxAll) {
    boxAll.addEventListener('mouseenter', function () {
        boxAll.setAttribute('style', 'background: pink'); 
    })

    function clearGrid () {
        erase.addEventListener('click', function () {
            boxAll.style.backgroundColor = 'white'
        })
    }

    clearGrid();


    function pinkAgain() {
        pinkMode.addEventListener('click', function () {
            boxAll.addEventListener('mouseenter', function () {
                boxAll.style.backgroundColor = 'pink'
            })
        })
    }

    pinkAgain();


    function colorRandom () { 
        gayMode.addEventListener('click', function () {
            boxAll.addEventListener('mouseenter', function () {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                boxAll.style.backgroundColor = '#' + randomColor
            })
        })
    }

    colorRandom();
}



);









