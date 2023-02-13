"use strict";

let size = 16;
const container = document.querySelector('.container');
const grid = document.querySelectorAll('.grid');

let userSize = document.querySelector('#select');
userSize.addEventListener('click', function () {
    size = getSize();
});
let color = 'black';

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => location.reload());

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
createGrid(size);


function getSize() {
    let input = prompt('Choose a grid size');
    let showMsg = document.querySelector('#userInput');
    if (input == '') {
        showMsg.textContent = 'Please input a number';
    } else if (input < 0 || input > 100) {
        showMsg.textContent = 'Input must be number beetween 1 and 100';
    } else {
        showMsg.textContent = 'Go!';
        createGrid(input);

    }
}


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