const container = document.querySelector('.container');
const grid = document.querySelectorAll('.grid');
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid(divs) {

    for (let i = 0; i < divs; i++) {
        let cells = document.createElement('div');
        cells.classList.add('grid');
        container.appendChild(cells);
        cells.addEventListener('mouseover', coloredDiv);
        cells.addEventListener('mousedown', coloredDiv);
    }
}
createGrid(256);


function coloredDiv(elem) {
    if (elem.type === 'mouseover' && mouseDown) {
    console.log(elem.target);
    elem.target.style.backgroundColor = 'black';
    }
}

