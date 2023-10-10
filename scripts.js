// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Convert inputs to numbers and check for validity
  const dividendNumber = parseFloat(dividend);
  const dividerNumber = parseFloat(divider);

  // Check if either input is not a valid number, if the divider is 0, or if the divider is negative
  if (isNaN(dividendNumber) || isNaN(dividerNumber) || dividerNumber <= 0) {
    // Log the error to the console with the call stack
    console.error("Error: Invalid division attempted", new Error().stack);

    // Display a critical error message and replace the entire screen
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>";
  } else {
    // Calculate the division result and round it down to the nearest whole number
    const divisionResult = Math.floor(dividendNumber / dividerNumber);
    result.innerText = divisionResult;
  }
});