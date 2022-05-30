const container = document.querySelector('#container');
const rainbowBtn = document.querySelector('#rainbow');
const blackBtn = document.querySelector('#black');
const eraserBtn = document.querySelector('#eraser');

// adds style property to container
// example, setGrid(16) sets --grid-rows is set to 16 and used in grid-templates-row css
function setGrid(grid) {
    container.style.setProperty("--grid-rows", grid);
    container.style.setProperty("--grid-cols", grid); 
}

// create cells and append to container
function createCells(gridSize) {
    let color = 'black'
    clearGrid();
    let i = 0;
    while (i < gridSize * gridSize) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.append(square);
        i++;
    }
    setColor(color);
}
setGrid(16);
createCells(16);

// add click event no new grid button then runs setgrid and createCells functions
const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', () => {
    let response = prompt('Enter # of squares per side');
    setGrid(response);
    createCells(response);
})

function clearGrid() {
    container.innerHTML = '';
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}
  
function randomColor() {
    return (
        "rgb(" +
        random(0, 255) +
        ", " +
        random(0, 255) +
        ", " +
        random(0, 255) +
        ")"
    );
}

rainbowBtn.addEventListener('click', () => {
    let color = 'rainbow';
    setColor(color);
})

blackBtn.addEventListener("click", () => {
    let color = "black";
    setColor(color);
});

eraserBtn.addEventListener("click", () => {
    let color = "white";
    setColor(color);
});

function setColor(color) {
    const squares = document.querySelectorAll('.square');
        for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function (e) {
            if (color == "black") {
            e.target.style.backgroundColor = "black";
            } else if (color == "rainbow") {
            e.target.style.backgroundColor = randomColor();
            } else if (color == "white") {
            e.target.style.backgroundColor = "white";
            } else {
            e.target.style.backgroundColor = "rgb(255, 255, 255)";
            }
        });
    }
}

