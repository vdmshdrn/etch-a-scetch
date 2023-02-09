const container = document.querySelector('.container');

function createGrid(divs) {

    for (let i = 0; i < divs; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells);
        cells.classList.add('.grid');
    }
}
createGrid(256);

container.addEventListener('mouseover', function (event) {
    let elem = event.target;
    console.log(elem);
    elem.style.backgroundColor = 'black';
    });

