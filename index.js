// Global variables
const DEFAULT_COLOR = "#000000";
const DEFAULT_MODE = "black";
const COLOR_ARR = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];
const GAME_MODES = ["black", "rainbow", "chosenColor", "eraser"];

var gameActive = false;
var gameMode = DEFAULT_MODE;
var gridSize = 40;
var chosenColor = DEFAULT_COLOR;


var colorsContainer;


// Onload initialization
window.onload = () => {
    createGrid();

    addColorArr();    
}

// General functionality

// Generate a array populated with grid panel elements
// Return array
function createGrid() {
    /* Create array based on the gSize variable
       Populate array with grid panels with dynamic css rules here

       panel size: 100% / gSize

    */ 
    var gameArea = document.getElementById("gameArea");
    

    for(let i = 0; i < gridSize * gridSize; i++) {
        var element = document.createElement("div");
            element.setAttribute("class", "flex-item--panel");
            element.style.display = "inline-block";
            element.style.width = "calc(100%/" + gridSize + ")";
            element.style.paddingTop = "calc(100%/" + gridSize + ")";
            element.style.backgroundColor = "#b2dfdb";
            element.style.margin = "0";
            element.addEventListener("mouseenter", function(e) {
                if(gameActive) {
                    if(gameMode === DEFAULT_MODE) {
                        e.target.style.backgroundColor = DEFAULT_COLOR;
                    } else if(gameMode === "rainbow") {
                        var rand = Math.floor(Math.random() * 7);
                        e.target.style.backgroundColor = COLOR_ARR[rand];
                    } else if(gameMode === GAME_MODES[2]){
                        e.target.style.backgroundColor = chosenColor;
                    } else if(gameMode === GAME_MODES[3]) {
                        e.target.style.backgroundColor = "#b2dfdb";
                    }
                }
        })
        gameArea.append(element);
    }

    gameActive = true;
}

function addColorArr() {
    var colorsContainer = document.getElementById("colorsCont");

    for(let i = 0; i < COLOR_ARR.length; i++) {
        var colorElement = document.createElement("button");
            colorElement.setAttribute("class", "btn-color");
            colorElement.style.display = "inline-block";
            colorElement.style.width = "calc(95%/7)";
            colorElement.style.paddingTop = "calc(90%/7)";
            colorElement.style.border = "1px solid grey";
            colorElement.style.backgroundColor = COLOR_ARR[i];
            colorElement.addEventListener("click", function(e){
                gameMode = GAME_MODES[2];
                chosenColor = COLOR_ARR[i];
            })

        colorsContainer.append(colorElement);
    }
}

function resetGameHTML() {
    var gameArea = document.getElementById("gameArea");
    gameArea.innerHTML = "";
}

function toggleGameActive() {
    gameActive = !gameActive;
}

function createElement() {
    var element = document.createElement("div");
        element.setAttribute("class", "flex-item--panel");
        // element.setAttribute("id", "panel-" + i);
        element.style.display = "inline-block";
        element.style.width = "calc(100%/" + gridSize + ")";
        element.style.paddingTop = "calc(100%/" + gridSize + ")";
        element.style.backgroundColor = "#ff9fcf";
        element.style.margin = "0";

        return element;
}

// Event listeners

var disableBtn = document.getElementById("disableGame");
disableBtn.addEventListener("click", function() {
    resetGameHTML();
})

var sizeInput = document.getElementById("changeSize");
sizeInput.addEventListener("click", function() {
    resetGameHTML();
    let sizeView = document.getElementById("sizeView");
    let userInput = parseInt(document.getElementById("uInput").value);
    console.log(userInput);
    sizeView.textContent = "Grid size: " + userInput;
    gridSize = userInput;
    
    createGrid();
 
})

var btnRainbow = document.getElementById("rainbow-pen");
btnRainbow.addEventListener("click", () => {
    gameMode = GAME_MODES[1];
})

var btnBlack = document.getElementById("black-pen");
btnBlack.addEventListener("click", () => {
    gameMode = GAME_MODES[0];
})

var btnEraser = document.getElementById("eraser");
btnEraser.addEventListener("click", () => {
    gameMode = GAME_MODES[3];
})

document.addEventListener("keydown", function(e) {
    if(e.key == 'f') {
        toggleGameActive();
    }
})


