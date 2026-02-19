# Module 03 - Exercises

This week heavily focuses on **Arrays** and **Objects** in JavaScript. We will use them to store data, visualize it, and create interactive tools.

## Exercise 01: Skyline

Visualize a city using an array of numbers representing building heights.

### Instructions

Open `main.js` and follow the steps in the comments:

1.  **Initialize Data:**
    -   Create an array `buildings` with 10 random numbers (heights).
    -   Update the DOM element `#data-output` to show these numbers.

2.  **Draw Loop:**
    -   Loop through the `buildings` array.
    -   Calculate `x` position based on the index.
    -   Draw a rectangle for each building using the value as height.
    -   *Challenge:* Map the color of the building to its height (taller = darker).

3.  **Interaction (Grow/Shrink):**
    -   Implement `growCity()`: Use `.map()` to create a *new* array where every building is 10% taller.
    -   Implement `shrinkCity()`: Use `.map()` to make every building 10% smaller.
    -   Don't forget to update the DOM output!

## Exercise 02: Data Finder

Build a tool to analyze a dataset of circle sizes using Array methods.

### Instructions

Open `main.js` and follow the steps in the comments:

1.  **Visualize Data:**
    -   Display the `sizes` array as a grid of circles.
    -   Use `cols` and `rows` to calculate positions.

2.  **Find Value:**
    -   Implement `findValue()` to search the array for a specific number input by the user.
    -   Use `.findIndex()` (or `.find()`) to locate the *first* occurrence.
    -   Store the result in a state variable (e.g., `foundIndex`).
    -   In `draw()`, check if the current index matches `foundIndex` and highlight it (e.g., in red).

3.  **Sort Data:**
    -   Implement sorting buttons ("Sort Up", "Sort Down").
    -   Use `.sort()` to rearrange the array. **Note:** This mutates the original array!
    -   Reset your `foundIndex` after sorting because positions change.

4.  **Calculate Stats:**
    -   Use `.reduce()` to calculate the **Total Mass** (sum of all sizes).
    -   Calculate the **Average Size**.
    -   Update the stats in the HTML.

## Exercise 03: Word Search

Create a sequential character hunt game. You will search through a grid of characters to find a word, letter by letter, in order.

### Instructions

Open `main.js`. This time, we use an **Array of Objects**.

1.  **Initialize Data:**
    -   Create a large array of objects.
    -   Each object should look like: `{ char: "A", x: 10, y: 10, found: false }`.
    -   Generate random characters for the grid.

2.  **Draw Grid:**
    -   Loop through the objects.
    -   Draw the character at its `x` and `y`.
    -   If `found` is `true`, draw it Bold/Black. If `false`, draw it Gray/Dim.

3.  **Sequential Search:**
    -   Listen for input in the text box.
    -   When the input changes (e.g. user types "HELLO"), loop through the input string.
    -   For each letter, find the *next available* matching character in the grid.
    -   **Constraint:** The next character must be at an index *greater* than the previous one.
    -   Mark the matching objects as `found = true`.
