# Exercise 03: Word search

This exercise bridges the gap between Arrays and Objects. You will create a game where you search for characters in a grid sequentially.

## Instructions

1.  **Setup the Characters:**
    -   In `setup()`, create a nested loop or a single loop (rows * cols) to fill the `characters` array.
    -   For each position, create an object: `{ char: ..., x: ..., y: ..., found: false }`.
    -   Generate a random uppercase letter: `String.fromCharCode(floor(random(65, 91)))`.
    -   Store the object in the `characters` array.

2.  **Draw the Grid:**
    -   Loop through the `characters` array.
    -   Draw the `char` at its `x` and `y` position.
    -   **Important:** Check the `found` property. If it is `true`, draw it Black/Bold. If `false`, draw it Grey/Normal.

3.  **Implement Sequential Search:**
    -   We want to match the characters users type in the input box, one by one.
    -   Use `.findIndex()` to locate the **first** matching character that appears **after** the previously found character.
    -   If found, simply set that object's `found` property to `true`.

4.  **Reset:**
    -   At the start of every search (when the input changes), make sure to reset all objects' `found` property to `false` so you can start a fresh search.
