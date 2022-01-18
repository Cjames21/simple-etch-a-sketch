// Global variables
var gameActive = false;


// General functionality

// Generate a array populated with grid panel elements
// Return array
function createGrid(gSize) {
    /* Create array based on the gSize variable
       Populate array with grid panels with dynamic css rules here

       panel size: 100% / gSize

    */ 
    var gameArea = document.getElementById("gameArea");

    

    for(let i = 0; i < gSize * gSize; i++) {
        var element = document.createElement("div");
        element.setAttribute("class", "flex-item--panel");
        // element.setAttribute("id", "panel-" + i);
        element.style.display = "inline-block";
        element.style.width = "calc(100%/" + gSize + ")";
        element.style.paddingTop = "calc(100%/" + gSize + ")";
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

// Event listeners
var enableBtn = document.getElementById("enableGame");
enableBtn.addEventListener("click", function() {
    createGrid(40);
})

var disableBtn = document.getElementById("disableGame");
disableBtn.addEventListener("click", function() {
    resetGameHTML();
})

document.addEventListener("keydown", function(e) {
    if(e.key == 'f') {
        gameActive = false;
    }
})

document.addEventListener("keyup", function(e) {
    if(e.key == 'f') {
        gameActive = true;
    }
})

