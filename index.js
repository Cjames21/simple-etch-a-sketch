// Global variables
var gameActive = false;
var gridSize = 40;


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
        // element.setAttribute("id", "panel-" + i);
        element.style.display = "inline-block";
        element.style.width = "calc(100%/" + gridSize + ")";
        element.style.paddingTop = "calc(100%/" + gridSize + ")";
        element.style.backgroundColor = "#ff9fcf";
        element.style.margin = "0";
        element.addEventListener("mouseenter", function(e) {
            if(gameActive) {
                e.target.style.backgroundColor = "black";
            }
        })
        gameArea.append(element);
    }

    gameActive = true;
}

function resetGameHTML() {
    var gameArea = document.getElementById("gameArea");
    gameArea.innerHTML = "";
}

function toggleGameActive() {
    gameActive = !gameActive;
}

// Event listeners
var enableBtn = document.getElementById("enableGame");
enableBtn.addEventListener("click", function() {
    createGrid();
})

var disableBtn = document.getElementById("disableGame");
disableBtn.addEventListener("click", function() {
    resetGameHTML();
})

var sizeInput = document.getElementById("changeSize");
sizeInput.addEventListener("click", function() {
    let sizeView = document.getElementById("sizeView");
    let userInput = parseInt(document.getElementById("uInput").value);
    console.log(userInput);
    sizeView.textContent = "Grid size: " + userInput;
    gridSize = userInput;
    
    createGrid();
 
})

document.addEventListener("keydown", function(e) {
    if(e.key == 'f') {
        toggleGameActive();
    }
})


