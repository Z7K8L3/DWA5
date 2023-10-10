// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  // Calculate the division result and round it down to the nearest whole number
  const divisionResult = Math.floor(dividend / divider);

  result.innerText = divisionResult;
});