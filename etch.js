let container = document.querySelector(".container");
let clearBtn = document.querySelector("#clear");
let gridSizeBtn = document.querySelector("#gridSize");

let startingBoxCount = 16;
let totalBoxes = startingBoxCount * startingBoxCount;

const canvasWidth = container.clientWidth;
const canvasHeight = container.clientHeight;


let createCanvas = () => {
    for (let i = 0; i < totalBoxes; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.setAttribute("class", "gridSquare");
        gridSquare.style.width = `${(startingBoxCount / totalBoxes) * 100}%`;
        gridSquare.style.height = `${(startingBoxCount / totalBoxes) * 100}%`;
        gridSquare.textContent = `${i}`
        container.append(gridSquare);
    }
}
createCanvas();

// clear previous grid
let clearGrid = () => {
    let allBoxes = document.querySelectorAll(".gridSquare");
    allBoxes.forEach(box => {
        box.remove();
    })
}

// prompt user on click
// capture values
// update startingBoxCount
let customGridSize = () => {
    let newSize;
    gridSizeBtn.addEventListener("click", () => {
        newSize = prompt("How many boxes on a side? (Max 100)");
        if (newSize > 100) {
            newSize = prompt("Please input a value less than 100");
        }
        startingBoxCount = newSize;
        totalBoxes = startingBoxCount * startingBoxCount;
        console.log("BOXES:", startingBoxCount, totalBoxes)
        clearGrid();
        createCanvas();
        pixelate();
        clear();
    })
}
customGridSize();

// Hovering effect
// when mouse hovers over a div
// change color of div to black
let pixelate = () => {
    let allBoxes = document.querySelectorAll(".gridSquare");
    allBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.background = "black";
        })
    })
};

pixelate();

let clear = () => {
    let allBoxes = document.querySelectorAll(".gridSquare");
    allBoxes.forEach(box => {
        clearBtn.addEventListener("click", () => {
            box.style.background = "white"
        })
    })
}

clear();
