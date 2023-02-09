const container = document.querySelector('.container');

function createGrid(divs) {

    for (let i = 0; i < divs; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells);
    }
}
createGrid(256);

container.addEventListener('mousemove', function (event) {
    console.log(event.target);
    });