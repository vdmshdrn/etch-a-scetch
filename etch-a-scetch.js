"use strict";
const container = document.querySelector('.container');
const grid = document.querySelectorAll('.grid');
let color = 'black';
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => location.reload());

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid(size) {

    for (let i = 0; i < size * size; i++) {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        let cells = document.createElement('div');
        cells.classList.add('grid');
        container.appendChild(cells);
        cells.addEventListener('mouseover', coloredDiv);
        cells.addEventListener('mousedown', coloredDiv);
    }
}
createGrid(16);

function getColor(choiseColor) {

    color = choiseColor;
}


function coloredDiv(elem) {
    if (elem.type === 'mouseover' && mouseDown) {
        if (color === 'random') {
            elem.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            elem.target.style.backgroundColor = color;
        }
    }
}