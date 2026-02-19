let container = document.querySelector('#canvas-container');

let characters = [];
let cols = 60;
let rows = 40;
let cellW, cellH;

function setup() {
    let canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent(container);

    textFont('Share Tech Mono');
    textAlign(CENTER, CENTER);

    cellW = width / cols;
    cellH = height / rows;

    // 2. Initialize Data
    // Create a loop (rows * cols)
    // For each item, create an Object: { char: randomChar, x: ..., y: ..., found: false }
    // Push object to 'characters' array

    // Listen for input changes, call updateSearch() when input changes

}

function draw() {
    background(255);

    // 3. Draw the Grid
    // Loop through characters array
    // Check if item.found is true -> Fill Black/Bold
    // Else -> Fill Grey/Normal
    // Draw text(item.char, item.x, item.y)
}

function updateSearch() {
    // 4. Implement sequential search

    // First: Reset all characters (set found = false)

    // Get input value
    let inputVal = this.value.toUpperCase();
    // Split input value into array of characters
    let searchChars = inputVal.split('');
    let lastFoundIndex = -1;

    // Loop through searchChars

    // Find the matching object index in 'characters' array
    // Condition: char matches AND index > lastFoundIndex

    // If found: 
    // Set update found attribute and update lastFoundIndex

}