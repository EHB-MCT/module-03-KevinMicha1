# Exercise 02: Data Finder

In this exercise, you will build a tool to analyze and search a dataset of circle sizes. You will use `find`, `sort`, and `reduce`.

## Instructions

1.  **Visualize the Grid:**
    -   Open `main.js`. Create a grid layout to display the `sizes` array as circles.
    -   Use the index to calculate `x` and `y` positions for each circle.

2.  **Find a Value (.findIndex):**
    -   The user enters a number in the "Find Value" input.
    -   When they click "Find", use the `.findIndex()` method to locate the index of the **first** matching value.
    -   If found (index > -1), highlight the circle at that index (e.g., turn it red).
    -   If not found, alert the user.

3.  **Sort the Data (.sort):**
    -   Add event listeners to the "Sort Up" and "Sort Down" buttons.
    -   Use the `.sort()` method to rearrange the `sizes` array in ascending or descending order.
    -   *Note: sort modifies the original array!*

4.  **Calculate Stats (.reduce):**
    -   Create a function `calculateStats()`.
    -   Use the `.reduce()` method to calculate the **Total Mass** (sum of all sizes).
    -   Calculate the **Average Size** (Total / Number of circles).
    -   Update the HTML elements with `id="total-mass"` and `id="avg-size"`.
    -   Call this function whenever the data changes (at start and reset).

5.  **Reset:**
    -   Add functionality to the "Load New Data" button.
    -   It should generate a new array of random sizes and re-calculate the stats.
