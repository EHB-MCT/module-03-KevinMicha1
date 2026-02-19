# Exercise 01: Mutating Skyline

Let's visualize an array of numbers as a city skyline and use array methods to transform the city.

## Instructions

1.  **Visualize the Data:**
    -   Open `main.js`. An array of `buildings` (numbers representing height) is already created.
    -   In `draw()`, loop through the `buildings` array.
    -   Draw a rectangle for each building. The *x* position depends on the index, the *y* position depends on the height value.
    -   **Challenge:** Can you make the color of the building change based on its height?

2.  **Grow the City (map):**
    -   Select the "Grow" button using `document.getElementById`.
    -   Add an event listener that uses the `.map()` method on the `buildings` array.
    -   Return a new value for each building that is 10% larger (* 1.1).

3.  **Shrink the City (map):**
    -   Do the same for the "Shrink" button.
    -   Use `.map()` to return a value that is 10% smaller (* 0.9).

4.  **Reset:**
    -   Ensure the reset button generates a new set of random data.

5.  **Animate (Bonus):**
    -   Create a global variable `animationOffset` and set it to 0.
    -   In `draw()`, increment `animationOffset` by 0.05.
    -   Use `map()` and `sin()` to change the height of the buildings slightly over time.
    -   *Hint:* `let animatedHeight = h + map(sin(animationOffset + index), -1, 1, -10, 10);`
