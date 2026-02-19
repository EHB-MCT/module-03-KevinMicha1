let sizes = [];
let cols = 10;
let rows = 10;
let numCircles = cols * rows;

// Stores index for find function
let foundIndex = -1;

function setup() {
    let container = document.getElementById('canvas-container');
    let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent('canvas-container');
    textAlign(CENTER, CENTER);

    resetData();

    // DOM Listeners
    document.getElementById('btn-find').addEventListener('click', findValue);
    document.getElementById('btn-sort-up').addEventListener('click', sortUp);
    document.getElementById('btn-sort-down').addEventListener('click', sortDown);
    document.getElementById('btn-reset').addEventListener('click', resetData);
}

function draw() {
    background(255); // White background

    let cellW = width / cols;
    let cellH = height / rows;


    // Loop through the sizes

    // Drawing
    // Check for found index: red or blue


}

function resetData() {
    //generate sizes
    //reset foundIndex
    //calculate stats

}

function findValue() {
    //get input value
    //search for value

    //if value not found, alert
    if (foundIndex == -1) {
        alert("Value not found!");
    }
}

function sortUp() {
    // sort ascending

}

function sortDown() {
    // sort descending

}

function calculateStats() {
    //use reduce to calculate total

    //calculate average

    //add both to DOM
}