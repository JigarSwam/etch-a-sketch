container = document.querySelector(".container");

let startingBoxCount = 10;
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

