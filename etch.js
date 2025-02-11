container = document.querySelector(".container");

let startingBoxCount = 20;
let totalBoxes = startingBoxCount * startingBoxCount;

const canvasWidth = container.clientWidth;
const canvasHeight = container.clientHeight;


let createCanvas = () => {
    for (let i = 0; i < totalBoxes; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.setAttribute("class", "gridSquare");
        gridSquare.style.width = `${Math.floor((startingBoxCount / totalBoxes) * 100)}%`;
        gridSquare.style.height = `${Math.floor((startingBoxCount / totalBoxes) * 100)}%`;
        gridSquare.textContent = `${i}`
        container.append(gridSquare);
    }
}

createCanvas();

